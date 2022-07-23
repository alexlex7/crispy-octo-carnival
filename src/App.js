import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
import About from './views/About';
import Contact from './views/Contact';
import Features from './views/Features';
import Home from './views/Home';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
