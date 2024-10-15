import './ListUser.css'
import axios from "axios";
import { useEffect, useState } from "react";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";

const ListUser = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        axios(import.meta.env.VITE_API_URL)
        .then((res) => setChars(res.data.results)
        );
    }, []);

  return (
    <div className="CardContainer">
        {chars.map((char) => {
            return (
                <div key={char.id}>
                    <Link to={`/detail/${char.id}`} style={{textDecoration: "none" }}>
                        <CardUser char={char} />
                    </Link>
                </div>
            );
        })}
    </div>
  )
};

export default ListUser;