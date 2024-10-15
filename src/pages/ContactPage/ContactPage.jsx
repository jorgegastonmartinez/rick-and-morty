import React from 'react'
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {

  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ContactPage</h1>
      <button onClick={() => navigate("/")}>Volver a home</button>
    </div>
  )
}

export default ContactPage