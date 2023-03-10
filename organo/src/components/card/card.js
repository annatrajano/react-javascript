// # Style
import "./card.css";

const Card = (props) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={props.image} alt={props.description_image}></img>
      </div>
      <div className="rodape">
        <h4>{props.name}</h4>
        <h5>{props.description}</h5>
      </div>
    </div>
  );
};

export default Card;
