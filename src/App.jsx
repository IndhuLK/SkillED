import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavFoot from './components/NavFoot';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import AboutUs from './components/About/AboutUs';
import CoursesSkill from './components/Courses/CoursesSkill';
import TeachingCertificate from './components/Courses/TeachingCertificate';
import DTSPage from './components/Courses/DTSPage';
import ECCE from './components/Courses/ECCE';
import PCTeach from './components/Courses/PCTeach';
import ModernTech from './components/Courses/ModernTech';
import ContactUs from './components/Contact/ContactUs';

function App() {
 

  return (
   <div className=''>
    <BrowserRouter>
    <NavFoot />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/courses" element={<CoursesSkill />} />
      <Route path="/courses/teaching-diploma" element={<DTSPage />} />
      <Route path="/courses/teaching-certificate" element={<TeachingCertificate />} />
      <Route path="/courses/ecce-certificate" element={<ECCE />} />
      <Route path="/courses/personality-communication" element={<PCTeach />} />
      <Route path="/courses/modern-teaching" element={<ModernTech />} />

      <Route path="/contact" element={<ContactUs />} />

    </Routes>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
