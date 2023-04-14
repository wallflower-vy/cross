
import './App.css';
import AboutComponent from './Components/AboutComponent';
import BusinessTool from './Components/BusinessTool';
import Commerce from './Components/Commerce';
import Financial from './Components/Financial';
import Footer from './Components/Footer';
import BannerComponent from './Components/HeroComponent';
import Sustainability from './Components/Sustainability';

function App() {
  return (
    <div className="App">
      <BannerComponent />
     <AboutComponent />
     <BusinessTool />
     <Commerce />
     <Financial />
     <Sustainability />
    <Footer />
    </div>
  );
}

export default App;
