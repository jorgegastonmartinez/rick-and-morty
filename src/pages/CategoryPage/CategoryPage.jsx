import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
import Spinner from "../../components/Spinner/Spinner";

const CategoryPage = () => {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { categoryId } = useParams();

  let filteredCharacters = chars.filter((char) => {
    return char.species === categoryId;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
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
  }, [categoryId]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="CardContainer">
          {filteredCharacters.map((char) => {
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

export default CategoryPage;