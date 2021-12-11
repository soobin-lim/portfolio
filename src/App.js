import './App.css';
import Header from './components/Layout/Header/Header'
import ContentSection from './components/Layout/ContentSection/ContentSection'
import Footer from './components/Layout/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <ContentSection/>
      <Footer/>
    </div>
  );
}
export default App;
