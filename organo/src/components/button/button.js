import "./button.css";

const Button = (props) => {

  return (
    <button className="bttn">
        {props.text}
    </button>
  );
};

export default Button;