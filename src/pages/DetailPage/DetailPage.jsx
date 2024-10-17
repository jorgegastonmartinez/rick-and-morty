import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
import Spinner from "../../components/Spinner/Spinner";
import "./DetailPage.css";

const DetailPage = () => {
  const [char, setChar] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios(`${import.meta.env.VITE_API_URL}/${id}`);
          setChar(response.data);
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="card-detail-page">
          <h1>PERSONAJE</h1>
          {char.id ? <CardUser char={char} /> : null}
        </div>
      )}
    </>
  );
};

export default DetailPage;