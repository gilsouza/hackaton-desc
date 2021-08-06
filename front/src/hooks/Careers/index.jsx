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
  const [currentCarrer, setCurrentCarrer] = useState({});
  const [questions, setQuestions] = useState([]);

  const getCareersByFragment = async (fragment) => {
    setLoading(true);
    if (fragment) {
      const { data } = await axios.get(`${API_URL}/careers?q=${fragment}`);
      setCarrers(data);
    } else {
      setCarrers([]);
    }
    setLoading(false);
  };

  const getCarrerById = async (id) => {
    setLoading(true);
    const { data } = await axios.get(`${API_URL}/careers?id=${id}`);
    if (data.length) {
      setCurrentCarrer(data[0]);
    } else {
      setCurrentCarrer(null);
    }
    setLoading(false);
  };

  const getBriefs = async () => {
    setLoading(true);
    if (currentCarrer?.id) {
      const { data } = await axios.get(`${API_URL}/careers/${currentCarrer?.id}/briefs?_expand=user`);

      const briefLikes = await Promise.all(data.map((brief) => axios.get(`${API_URL}/briefs/${brief.id}/likes`)));
      setBriefs(data.map((d, index) => ({ ...d, likes: briefLikes[index].data })));
    } else {
      setBriefs([]);
    }
    setLoading(false);
  };

  const getSalaries = async () => {
    setLoading(true);
    if (currentCarrer?.id) {
      const { data } = await axios.get(`${API_URL}/careers/${currentCarrer?.id}/salaries`);

      setSalaries(data);
    } else {
      setSalaries([]);
    }
    setLoading(false);
  };

  const getQuestions = async () => {
    setLoading(true);
    if (currentCarrer?.id) {
      const { data } = await axios.get(`${API_URL}/questions?careerId=${currentCarrer?.id}&_expand=user`);

      setQuestions(data);
    } else {
      setQuestions([]);
    }
    setLoading(false);
  };

  return (
    <CareersContext.Provider value={{
      careers,
      currentCarrer,
      getCareersByFragment,
      getCarrerById,
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
