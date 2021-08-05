import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const CareersContext = createContext({});

const API_URL = 'https://hackaton-desc-back.vercel.app';

const CareersProvider = ({ children }) => {
  const [careers, setCarrers] = useState([]);
  const [briefs, setBriefs] = useState([]);
  const [currentCarrer, setCurrentCarrer] = useState({});
  const [questions, setQuestions] = useState([]);

  const getCareersByFragment = async (fragment) => {
    if (fragment) {
      const { data } = await axios.get(`${API_URL}/careers?q=${fragment}`);
      setCarrers(data);
    } else {
      setCarrers([]);
    }
  };

  const getCarrerById = async (id) => {
    const { data } = await axios.get(`${API_URL}/careers?id=${id}`);
    if (data.length) {
      setCurrentCarrer(data[0]);
    } else {
      setCurrentCarrer(null);
    }
  };

  const getBriefs = async () => {
    if (currentCarrer?.id) {
      const { data } = await axios.get(`${API_URL}/careers/${currentCarrer?.id}/briefs?_expand=user`);
      setBriefs(data);
    } else {
      setBriefs([]);
    }
  };

  const getQuestions = async () => {
    if (currentCarrer?.id) {
      const { data } = await axios.get(`${API_URL}/questions?careerId=${currentCarrer?.id}&_expand=user`);

      setQuestions(data);
    } else {
      setQuestions([]);
    }
  };

  return (
    <CareersContext.Provider value={{
      careers,
      currentCarrer,
      getCareersByFragment,
      getCarrerById,
      getBriefs,
      getQuestions,
      questions,
      briefs,
    }}
    >
      {children}
    </CareersContext.Provider>
  );
};

const useCareers = () => {
  const context = useContext(CareersContext);

  if (!context) {
    throw new Error('useCareers must be used within an useCareers');
  }

  return context;
};

export { CareersProvider, useCareers };
