import './Home.css';
import { lazy, Suspense } from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import Featured from '../../components/Featured/Featured';
import Loading from '../../components/Loading/Loading';
const BestProduct = lazy(() =>
  import('../../components/BestProduct/BestProduct')
);

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Suspense fallback={<Loading />}>
        <BestProduct />
      </Suspense>
      <About />
    </>
  );
};

export default Home;
