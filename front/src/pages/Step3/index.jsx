import { Check } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { Container, TextArea, Title } from '../Avaliar/styles';
import { Button } from '../../components/Button';
import { useRate } from '../../hooks/Rate';
import animationData from '../../assets/50867-sending-mail.json';

const Step3 = () => {
  const history = useHistory();
  const { setRateState, sendRate } = useRate();
  const [brief, setBrief] = useState();
  const [submited, setSubimited] = useState(false);
  useEffect(() => {
    setRateState((previosState) => ({
      ...previosState,
      brief,
      submited,
    }));
  }, [brief, submited]);
  const onAnimationFinished = () => {
    sendRate();
    history.push('');
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
  };
  return (
    <Container>
      {!submited ? (
        <>
          <Title>Digite um depoimento sobre sua carreira atual</Title>
          <TextArea onChange={(event) => setBrief(event.target.value)} value={brief} />
          <Button
            text="Enviar avaliação"
            sufixIcon={<Check />}
            onClick={() => setSubimited(true)}
          />
        </>
      ) : (
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          eventListeners={[
            {
              eventName: 'complete',
              callback: onAnimationFinished,
            },
          ]}
        />
      )}
    </Container>
  );
};

export { Step3 };
