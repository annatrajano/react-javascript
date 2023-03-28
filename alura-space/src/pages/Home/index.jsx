import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "./PaginaInicial.module.scss";
import home from "../../assets/icones/home.png";
import banner from "./banner.png";
import maisCurtidas from "../../assets/icones/mais-curtidas.png";
import maisVistas from "../../assets/icones//mais-vistas.png";
import novas from "../../assets/icones/novas.png";
import surpreendaMe from "../../assets/icones/surpreenda-me.png";

const dataForMenu = [
  { img: home, ancor: "Home" },
  { img: maisCurtidas, ancor: "Mais Curtidas" },
  { img: maisVistas, ancor: "Mais Vistas" },
  { img: novas, ancor: "Novas" },
  { img: surpreendaMe, ancor: "Surpreenda-me" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <div>
            {dataForMenu.map((item, index) => (
              <Menu key={index} data={item} />
            ))}
          </div>
          <div className={styles.principal__imagems}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
      </main>
    </>
  );
}
