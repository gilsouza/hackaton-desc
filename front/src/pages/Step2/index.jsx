import { ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Button } from '../../components/Button';
import { Title } from '../Avaliar/styles';

const Step2 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [quality, setQuality] = useState(3);

  return (
    <>
      <Title>Avalie a carreira de acordo com sua qualidade de vida</Title>
      <ReactStars count={quality} ratingChanged={setQuality} />
      <Button
        text="Proximo passo"
        sufixIcon={<ArrowRight />}
        onClick={() => history.push(pathname.replace('2', '3'))}
      />
    </>
  );
};

export { Step2 };
