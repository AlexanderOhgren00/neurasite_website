import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Topbar from './topbar/Topbar';
import Footer from './footer/Footer';
import { useState } from 'react';
import { useRef } from "react";

function App() {

  const [backgroundColor, setBackgroundColor] = useState("#191b29");
  const problemPage = useRef(null);
  const aboutPage = useRef(null);
  const websitePage = useRef(null);
  const homePage = useRef(null);
  const consultantPage = useRef(null);
  const popupRef = useRef(null);

  return (
    <BrowserRouter>
      <div style={{ display: "flex"}}>
        <div>
          <Navbar homePage={homePage} problemPage={problemPage} consultantPage={consultantPage} aboutPage={aboutPage} 
          websitePage={websitePage} popupRef={popupRef}/>
        </div>
        <div style={{ flexGrow: 1 }}> 
          <Topbar backgroundColor={backgroundColor}/>
          <Routes>
            <Route path="/" element={<Home setBackgroundColor={setBackgroundColor} backgroundColor={backgroundColor} homePage={homePage} consultantPage={consultantPage}
            problemPage={problemPage} aboutPage={aboutPage} websitePage={websitePage} popupRef={popupRef}/>}/>
            <Route path="/about" element={<h1>About</h1>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
