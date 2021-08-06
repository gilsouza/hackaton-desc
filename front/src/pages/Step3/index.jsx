import { ArrowLeft, Check } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import {
  Container, Row, TextArea, Title,
} from '../Avaliar/styles';
import { Button } from '../../components/Button';
import { useRate } from '../../hooks/Rate';
import animationData from '../../assets/50867-sending-mail.json';

const Step3 = () => {
  const { profissao } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();
  const { setRateState, sendRate } = useRate();
  const [brief, setBrief] = useState('');
  const [submited, setSubimited] = useState(false);
  useEffect(() => {
    setRateState((previosState) => ({
      ...previosState,
      brief,
    }));
  }, [brief]);
  const onAnimationFinished = () => {
    sendRate().then(() => history.push(`/profissao/${profissao}/`));
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
          <Row>

            <Button
              text="Voltar passo"
              prefixIcon={<ArrowLeft />}
              style={{ marginRight: 8 }}
              onClick={() => history.push(pathname.replace('3', '2'))}
            />
            <Button
              disabled={brief.length < 20}
              text={brief.length === 0 ? 'Pular passo' : 'Enviar avaliação'}
              sufixIcon={<Check />}
              onClick={() => setSubimited(true)}
            />
          </Row>
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
