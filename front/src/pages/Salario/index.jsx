import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { ChartTitle, PageContainer } from './styles';
import { useCareers } from '../../hooks/Careers';
import { Card } from '../../styles/global-components';

require('dayjs/locale/pt-br');

const baseWages = [
  5000,
  5100,
  5200,
  5300,
  5400,
  5500,
  5600,
  5700,
  5800,
  5900,
  6000,
  6100,
];

dayjs.locale('pt-br');
const Salario = () => {
  const { getSalaries, currentCareer } = useCareers();

  useEffect(() => {
    getSalaries();
  }, [currentCareer]);

  const lastMonths = new Array(12).fill().map((l, index) => dayjs().add(-index, 'month')).reverse();
  // const getSalariesByMonths = (timeExperience) => lastMonths.map(
  //   (month) => salaries.filter(
  //     (salarie) => dayjs(salarie.createdAt).isSame(month, 'month') &&
  // salarie.time_experience === timeExperience,
  //   ).reduce(
  //     (a, b) => (a + b?.value) / 2, 0,
  //   ),
  // );

  const getSalariesByMonths = (exp) => baseWages.map(
    (wage) => (wage + (Math.random() > 0.5
      ? Math.random() * 500 : Math.random() * -500) + exp * 1000),
  );

  const datas = [{
    labels: lastMonths.map((l) => l.format('MMM')),
    datasets: [
      {
        data: getSalariesByMonths(0),
        backgroundColor: '#00E88F',
      },
    ],
  },
  {
    labels: lastMonths.map((l) => l.format('MMM')),
    datasets: [
      {
        data: getSalariesByMonths(1),
        backgroundColor: '#00E88F',
      },
    ],
  },
  {
    labels: lastMonths.map((l) => l.format('MMM')),
    datasets: [
      {
        data: getSalariesByMonths(2),
        backgroundColor: '#00E88F',
      },
    ],
  },
  {
    labels: lastMonths.map((l) => l.format('MMM')),
    datasets: [
      {
        data: getSalariesByMonths(3),
        backgroundColor: '#00E88F',
      },
    ],
  }];

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <PageContainer>
      <Card>
        <ChartTitle>Salários de 0 a 3 anos de experiência</ChartTitle>
        <Bar
          data={datas[0]}
          options={options}
        />
      </Card>
      <Card>
        <ChartTitle>Salários de 3 a 6 anos de experiência</ChartTitle>
        <Bar
          data={datas[1]}
          options={options}
        />
      </Card>
      <Card>
        <ChartTitle>Salários de 6 a 9 anos de experiência</ChartTitle>
        <Bar
          data={datas[2]}
          options={options}
        />
      </Card>
      <Card>
        <ChartTitle>Salários de 9 ou mais anos de experiência</ChartTitle>
        <Bar
          data={datas[3]}
          options={options}
        />
      </Card>
    </PageContainer>
  );
};

export { Salario };
