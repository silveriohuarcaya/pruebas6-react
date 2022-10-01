import Navbar from '../../components/Navbar';
// import RecentJobs from '../../components/RecentJobs';
import Footer from '../../components/Footer';

import './index.scss';

const Home = () => (
  <div className="home">
    <Navbar />

    <header>
      <div className="home__container">
        <h1>Silverio Huarcaya</h1>
      </div>
    </header>

    <main>Contenido</main>

    <Footer />
  </div>
);

export default Home;
