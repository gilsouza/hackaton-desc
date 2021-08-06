import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { Loading } from '../../components/Loading';

const CareersContext = createContext({});

const API_URL = 'https://hackaton-desc.herokuapp.com';

const CareersProvider = ({ children }) => {
  const [careers, setCarrers] = useState([]);
  const [salaries, setSalaries] = useState([]);
  const [loadding, setLoading] = useState(false);
  const [briefs, setBriefs] = useState([]);
  const [topVoteBrief, setTopVoteBrief] = useState(null);
  const [currentCareer, setCurrentCareer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [ratings, setRatings] = useState([]);

  const getCareersByFragment = async (fragment, showLoading = true) => {
    setLoading(showLoading);
    const { data } = await axios.get(`${API_URL}/careers?name_like=${fragment}`);
    if (fragment) {
      setCarrers(data);
    } else {
      setCarrers([]);
    }
    setLoading(false);
    return data;
  };

  const getCareerById = async (id, showLoading = true) => {
    setLoading(showLoading);
    const { data } = await axios.get(`${API_URL}/careers?id=${id}`);
    if (data.length) {
      setCurrentCareer(data[0]);
    } else {
      setCurrentCareer(null);
    }
    setLoading(false);
  };

  const getBriefs = async () => {
    setLoading(true);
    if (currentCareer?.id) {
      const { data } = await axios.get(`${API_URL}/careers/${currentCareer?.id}/briefs?_expand=user`);

      const briefLikes = await Promise.all(data.map((brief) => axios.get(`${API_URL}/briefs/${brief.id}/likes`)));
      const briefsWithLikes = data
        .map((d, index) => ({
          ...d,
          likes: briefLikes[index].data,
          score: briefLikes[index].data.filter((l) => l.like).length
              - briefLikes[index].data.filter((l) => !l.like).length,
        }))
        .sort((b) => b.score);
      setBriefs(briefsWithLikes);
      console.log('briefsWithLikes', briefsWithLikes);
      setTopVoteBrief(briefsWithLikes[0]);
    } else {
      setTopVoteBrief(null);
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

  const getRatings = async () => {
    setLoading(true);

    if (currentCareer?.id) {
      const { data } = await axios.get(`${API_URL}/ratings?careerId=${currentCareer?.id}`);

      setRatings(data);
    } else {
      setRatings([]);
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
      getRatings,
      questions,
      briefs,
      salaries,
      ratings,
      topVoteBrief,
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
