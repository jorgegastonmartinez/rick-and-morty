import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ContactPage.css"

const ContactPage = () => {

  const navigate = useNavigate();

  return (
    <div className='contact-page'>
      <button className='btn-contact' onClick={() => navigate("/")}>Volver a home</button>
    </div>
  )
}

export default ContactPage;