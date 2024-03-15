import React from 'react';
import logo from '../images/Logotipo_infodevelop.bmp';
import '../css/App.css';

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="InfoDevelop logo" />
        <br></br>
        <h1>Bem-vindo à InfoDevelop</h1>
        <br></br>
        <p>
          Somos uma empresa dedicada ao desenvolvimento de software de qualidade e soluções digitais inovadoras.
        </p>
      </header>
    </div>
  );
}

export default About;
