import './ListUser.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardUser from "../CardUser/CardUser";
import Spinner from '../Spinner/Spinner';

const ListUser = () => {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios(import.meta.env.VITE_API_URL);
          setChars(response.data.results);
          setIsLoading(false);
        }, 2500);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="CardContainer">
          {chars.map((char) => {
            return (
              <div key={char.id}>
                <Link
                  to={`/detail/${char.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardUser char={char} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListUser;