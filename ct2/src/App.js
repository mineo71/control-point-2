import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutCompany from './components/aboutcompany';
import Count from './components/countup';
import Cards from './components/cards'
import ContactUs from './components/contactus';
import Subscription from './components/subscription';
import Player from './components/player';
import SimpleSliderA from './components/sliders/homeslider'
import Testimonials from './components/sliders/testimonials';
import MultiSliderA from './components/sliders/projects';
import Services from './components/sliders/services';

function App() {
  return (
      <div className="App">
      <Navbar />
      <div className="purple-background"></div>
      <SimpleSliderA />
      <AboutCompany />
      <Count />
      <MultiSliderA />
      <Cards />
      <Testimonials />
      <Services />
      <Subscription />
      <Player/>
      <ContactUs />
      <Footer />
    </div>
    
  );
}

export default App;
