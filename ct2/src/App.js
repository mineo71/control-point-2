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
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: false, // whether animation should happen only once - while scrolling down 
  duration:1200,
});

function App() {
  return (
      <div className="App">
        <div><Navbar/></div>
        <div data-aos="fade-up" className="purple-background"></div>
        <div data-aos="fade-up"><SimpleSliderA/></div>
        <div data-aos="fade-up"><AboutCompany /></div>
        <div data-aos="fade-up"><Count/></div>
        <div data-aos="fade-up"><MultiSliderA/></div>
        <div data-aos="fade-up"><Cards /></div>
        <div data-aos="fade-up"><Testimonials/></div>
        <div data-aos="fade-up"><Services /></div>
        <div data-aos="fade-up"><Subscription/></div>
        <div data-aos="fade-up"><Player/></div>
        <div data-aos="fade-up"><ContactUs /></div>
        <div data-aos="fade-up"><Footer /></div>
    </div>
    
  );
}

export default App;
