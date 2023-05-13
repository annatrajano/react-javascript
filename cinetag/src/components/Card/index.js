

import styles from "./Card.module.css";

import { Link } from "react-router-dom";

import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from "contexts/Favoritos";

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  console.log(favorito)

/*    const isFavorite = favorito.some((fav) => fav.id === id); 
 */
 /*   const icon = isFavorite ? iconeFavoritar : iconeDesfavoritar;  */

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
      
      <img alt={titulo} src={capa} className={styles.capa} />
      <h2>{titulo}</h2>
      
      
      </Link>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() =>  adicionarFavorito ({ id, titulo, capa })}
      />
    </div>
  );
}
