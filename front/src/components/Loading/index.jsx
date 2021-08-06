import Lottie from 'react-lottie';
import { BackgroundLoading, PageContainer } from './styles';
import animationData from '../../assets/28893-book-loading.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <>
      <PageContainer>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </PageContainer>
      <BackgroundLoading />
    </>
  );
};

export { Loading };
