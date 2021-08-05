import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const CareersContext = createContext({});

const CareersProvider = ({ children }) => {
  const [careers, setCarrers] = useState([]);
  const [currentCarrer, setCurrentCarrer] = useState({});

  const getCareersByFragment = async (fragment) => {
    const { data } = await axios.get(`https://hackaton-desc-back.vercel.app/careers?q=${fragment}`);
    if (fragment) {
      setCarrers(data);
    } else {
      setCarrers([]);
    }
  };
  const getCarrerById = async (id) => {
    const { data } = await axios.get(`https://hackaton-desc-back.vercel.app/careers?id=${id}`);
    if (data.length) {
      setCurrentCarrer(data[0]);
    } else {
      setCurrentCarrer(null);
    }
  };

  return (
    <CareersContext.Provider value={{
      careers,
      currentCarrer,
      getCareersByFragment,
      getCarrerById,
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
