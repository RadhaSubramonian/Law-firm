import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import IntroSection from './Components/IntroSection';
import SuccessCard from './Components/SuccessCard';
import Area from './Components/Area';
import Feedback from './Components/Feedback';
import Team from './Components/Team';
import FAQ from './Components/FAQ';
import Subscribe from './Components/Subscribe';


function App() {
  return (
      <div style={{width:'1135px',margin:'auto',marginTop:'80px'}}>
        <Navbar Contactvisible="true"/>
        <Hero />
        <IntroSection />
        <SuccessCard title="Why Choose us?" successRate="98% Success Rate"/>
        <Area />
        <Feedback title="What says our happy Clients"/>
        <Team />
        <FAQ />
        <Subscribe />
        <div style={{width:'933px',margin:'auto',marginTop:'170px',marginBottom:'150px'}}>
        <Navbar copyright="true"/>
        </div>
      </div>
  );
}

export default App;
