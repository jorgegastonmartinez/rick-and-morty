import img404 from "../../assets/error404.jpg"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='Container404'>
      <h2>redireccionando a la página de inicio en 5 segundos</h2>
      <img src={img404} alt="imagen de error 404" />
    </div>
  )
}

export default ErrorPage;