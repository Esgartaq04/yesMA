import logo from './logo.svg';
import './App.css';
import BRT from './pages/BRT';
import { useState, React, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityBrtGrowth from './components/CityBrtGrowth';
function App() {
  useEffect(() => {
    const changeBackground = () => {
      const scrollPos = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = getDocHeight();

      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor(scrollPos / totalDocScrollLength * 100);

      //let red = Math.round(21 + (30 - 21) + scrollPosition);
      //let green = Math.round(122 + (174 - 122) + scrollPosition);
      //let blue = Math.round(92 + (131 - 92) + scrollPosition);

      //document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 1)`;

      document.body.style.backgroundColor = `rgba(21, ${Math.min(122 + scrollPosition, 255)}, 92)`;
      //document.Navigation.style.backgroundColor = `rgba(21, ${Math.min(122 + scrollPosition, 255)}, 92)`;
    }

    const getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    }

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);

  return (
    <div>
    <Navigation />
    < CityBrtGrowth/>
    < BRT />
    < Footer />
    </div>
  );
}


export default App; 
