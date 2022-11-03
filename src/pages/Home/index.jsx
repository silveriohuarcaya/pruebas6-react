import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './index.scss';

const Home = () => (
  <div className="home">
    <header>
      <Navbar />
    </header>

    <main>
      <div className="main__container">Silverio Huarcaya</div>
    </main>

    <Footer />
  </div>
);

export default Home;
