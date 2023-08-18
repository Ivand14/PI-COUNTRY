import { Link } from "react-router-dom";
import style from "./Cards.module.css";

function Cards({ id, name, image, continent }) {
  return (
    <div className={style.container}>
      <div key={id} className={style.containerCards}>
        <img src={image} alt={name} className={style.image} />
        <div className={style.containerInfo}>
          <h2 className={style.text}>{name}</h2>
          <p className={style.parrafo}>{continent}</p>
          <Link to={`/detail/${id}`}>
            <button className={style.button}>VER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
