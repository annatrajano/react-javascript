import React from "react";

import favorito from "./favorito.png";
import open from "./open.png";

export default function Cards({fotos, styles}) {
  return (
    <ul className={styles.galeria__cards}>
      {fotos.map((foto) => {
        return (
          <li key={foto.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={foto.imagem}
              alt={foto.titulo}
            />
            <p className={styles.galeria__descricao}>{foto.titulo}</p>
            <div>
              <p>{foto.creditos}</p>
              <span>
                <img src={favorito} alt="ícone coração de curtir" />
                <img src={open} alt="ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
