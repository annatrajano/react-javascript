import PostModelo from "componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png"

import styles from "./SobreMim.module.css";

import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
      <PostModelo
      fotoCapa={fotoCapa}
      titulo={"Sobre mim"}
      >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Anna!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu trabalho como Desenvolvedora Front-end na PUC-RIO e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no período da faculdade de Engenharia, onde tive o primeiro contato com a lógica 
                da programação e algumas linguagens. Posteriormente, com o término da minha graduação em Engenharia de Petróleo, iniciei o curso da Trybe, uma escola voltada para o Desenvolvimento Web. Finalizei o curso e me formei como Desenvolvedora FullStack.
            </p>
            <p className={styles.paragrafo}>
                Desde então, após começar a trabalhar com desenvolvimento de aplicações, optei por focar no Front-end, minha verdadeira paixão! Hoje sou muito feliz de ter migrado para área da tecnologia e tenho como meta aprender cada vez mais :)
            </p>
      </PostModelo>

  );
}
