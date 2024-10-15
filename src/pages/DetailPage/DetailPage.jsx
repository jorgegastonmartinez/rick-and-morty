import axios from "axios";
import { useEffect, useState } from "react";
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [char, setChar] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/${id}`).then((json) =>
      setChar(json.data)
    );
  }, [id]);

  return (
    <>
      <h1>Descripcion del personaje</h1>

      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        {char.id ? <CardUser char={char} /> : null}
      </div>
    </>
  );
};

export default DetailPage;