import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./AboutPage.css";

const AboutPage = () => {

  const navigate = useNavigate();

  return (
    <div className='about-page'>
       <button className='btn-about' onClick={() => navigate("/")}>Volver a home</button>
    </div>
  )
}

export default AboutPage