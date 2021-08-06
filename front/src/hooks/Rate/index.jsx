import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const RateContext = createContext({});

const API_URL = 'https://hackaton-desc.herokuapp.com';
const RateProvider = ({ children }) => {
  const [rateState, setRateState] = useState({});

  const sendRate = async () => {
    await axios.post(`${API_URL}/ratings`, {
      is_employed: true,
      salary_range: rateState.salaryRange,
      time_employed: rateState.timeEmployed,
      had_salary_increase: false,
      happy_current_job: false,
      happiness: rateState.happiness,
      employability: rateState.employability,
      salary_satisfaction: rateState.salarySatisfaction,
      careerId: rateState.careerId,
      userId: 1,
    });

    if (rateState.salaryRange) {
      await axios.post(`${API_URL}/salaries`,
        {
          value: Math.random()
              * (((rateState.salaryRange + 1) * 2000) - rateState.salaryRange * 2000)
              + rateState.salaryRange * 2000,
          time_experience: rateState.timeEmployed,
          userId: 1,
          careerId: rateState.careerId,
        });
    }
    if (rateState.brief) {
      await axios.post(`${API_URL}/briefs`, {
        text: rateState.brief,
        careerId: rateState.careerId,
        userId: 1,
      });
    }
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
