// # Main Import
import { useState } from "react";

// # Style
import "./form.css";

// # Components
import FormInput from "../formInput";
import List from "../list";
import Button from "../button";

const Form = (props) => {

  const [nameValue, setNameValue] = useState("")

  const [positionValue, setPositionValue] = useState("")

  const [imageValue, setImageValue] = useState("")

  const [teamValue, setTeamValue] = useState("")


  const dataForInputs = [
  {
    label: "Nome",
    placeholder: "Digite o seu nome",
    type: "text",
    required: true,
    value: nameValue,
    setState: setNameValue
  },
  {
    label: "Cargo",
    placeholder: "Digite o seu cargo",
    type: "text",
    required: true,
    value: positionValue,
    setState: setPositionValue
  },
  {
    label: "Imagem",
    placeholder: "Carregue a sua imagem",
    type: "text",
    value: imageValue,
    setState: setImageValue
  },
];
  const dataForList =   {
    label:"Time",
    itens: ["Programação", "FrontEnd", "Data Science", "Devops", "UX e Desing", "Mobile", "Inovação e Gestão"],
    value: teamValue,
    setState: setTeamValue
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    props.createUser({
      nameValue,
      positionValue,
      imageValue,
      teamValue
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}> 
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        {dataForInputs.map((item, index) => (
          <FormInput key={index} data={item}/>
        ))}
        <List data={dataForList} />
        <Button text="Criar Card"/>
      </form>
    </section>
  );
};

export default Form;
