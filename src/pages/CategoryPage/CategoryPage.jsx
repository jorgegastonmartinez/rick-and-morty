import axios from "axios";
import { useEffect, useState } from "react";
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const [chars, setChars] = useState([]);

    let { categoryId } = useParams();

    let filteredCharacters = chars.filter((char) => {
        return char.species === categoryId;
    })

    useEffect(() => {
        axios(import.meta.env.VITE_API_URL).then((res) => setChars(res.data.results)
        );
    }, []);

  return (
    <div className="CardContainer">
        {filteredCharacters.map((char) => {
            return (
                <div>
                    <CardUser char={char} />
                </div>
            );
        })}     
    </div>
  );
}

export default CategoryPage;