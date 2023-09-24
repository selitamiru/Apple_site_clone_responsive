import React from 'react'
import './App.css';
import './commonResource/css/bootstrap.css';
import Header from './commonResource/js/Header';
import {
  AlertSection,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
} from "./commonResource/js/Main";

import Footer from './commonResource/js/Footer';
// import AlertSection from './commonResource/js/Main/AlertSection';
// import FirstSection from './commonResource/js/Main/FirstSection';
// import SecondSection from './commonResource/js/Main/SecondSection';
// import ThirdSection from './commonResource/js/Main/ThirdSection';
// import FourthSection from './commonResource/js/Main/FourthSection';
// import FifthSection from './commonResource/js/Main/FifthSection';
// import SixthSection from './commonResource/js/Main/SixthSection';


function App() {
  return (
    <div className="App">
      <Header />
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}


export default App;
