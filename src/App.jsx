import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <main className="container">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
