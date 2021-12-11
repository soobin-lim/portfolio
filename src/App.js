import './App.css';
import { Routes, Route, } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header';

import AboutMe from './components/Layout/ContentSection/AboutMe/AboutMe';
import Contact from './components/Layout/ContentSection/Contact/Contact';
import Portfolio from './components/Layout/ContentSection/Portfolio/Portfolio';
import Resume from './components/Layout/ContentSection/Resume/Resume';
import Error from './components/Layout/ContentSection/Error/Error'

import Footer from './components/Layout/Footer/Footer'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
