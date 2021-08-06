import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const RateContext = createContext({});

const API_URL = 'https://hackaton-desc-back.vercel.app';
const RateProvider = ({ children }) => {
  const [rateState, setRateState] = useState({});

  const sendRate = async () => {
    await axios.post(`${API_URL}/rate`, rateState);
    setRateState(true);
  };

  return (
    <RateContext.Provider value={{
      rateState,
      setRateState,
      sendRate,
    }}
    >
      {children}
    </RateContext.Provider>
  );
};

const useRate = () => {
  const context = useContext(RateContext);

  if (!context) {
    throw new Error('useRate must be used within an useRate');
  }

  return context;
};

export { RateProvider, useRate };
