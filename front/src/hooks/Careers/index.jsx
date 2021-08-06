import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { Loading } from '../../components/Loading';

const CareersContext = createContext({});

const API_URL = 'https://hackaton-desc-back.vercel.app';

const CareersProvider = ({ children }) => {
  const [careers, setCarrers] = useState([]);
  const [salaries, setSalaries] = useState([]);
  const [loadding, setLoading] = useState(false);
  const [briefs, setBriefs] = useState([]);
  const [currentCareer, setcurrentCareer] = useState(null);
  const [questions, setQuestions] = useState([]);

  const getCareersByFragment = async (fragment, showLoading = true) => {
    setLoading(showLoading);
    const { data } = await axios.get(`${API_URL}/careers?q=${fragment}`);
    if (fragment) {
      setCarrers(data);
    } else {
      setCarrers([]);
    }
    setLoading(false);
    return data;
  };

  const getCareerById = async (id) => {
    setLoading(true);
    const { data } = await axios.get(`${API_URL}/careers?id=${id}`);
    if (data.length) {
      setcurrentCareer(data[0]);
    } else {
      setcurrentCareer(null);
    }
    setLoading(false);
  };

  const getBriefs = async () => {
    setLoading(true);
    if (currentCareer?.id) {
      const { data } = await axios.get(`${API_URL}/careers/${currentCareer?.id}/briefs?_expand=user`);

      const briefLikes = await Promise.all(data.map((brief) => axios.get(`${API_URL}/briefs/${brief.id}/likes`)));
      setBriefs(data.map((d, index) => ({ ...d, likes: briefLikes[index].data })));
    } else {
      setBriefs([]);
    }
    setLoading(false);
  };

  const getSalaries = async () => {
    setLoading(true);
    if (currentCareer?.id) {
      const { data } = await axios.get(`${API_URL}/careers/${currentCareer?.id}/salaries`);

      setSalaries(data);
    } else {
      setSalaries([]);
    }
    setLoading(false);
  };

  const getQuestions = async () => {
    setLoading(true);
    if (currentCareer?.id) {
      const { data } = await axios.get(`${API_URL}/questions?careerId=${currentCareer?.id}&_expand=user`);

      setQuestions(data);
    } else {
      setQuestions([]);
    }
    setLoading(false);
  };

  return (
    <CareersContext.Provider value={{
      careers,
      currentCareer,
      getCareersByFragment,
      getCareerById,
      getBriefs,
      getSalaries,
      getQuestions,
      questions,
      briefs,
      salaries,
    }}
    >
      {children}
      {loadding && <Loading />}
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
