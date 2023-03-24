// # Main Import
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// # Style
import "./form.css";

// # Components
import FormInput from "../formInput";
import List from "../list";
import Button from "../button";

const Form = (props) => {
  const [nameValue, setNameValue] = useState("");

  const [positionValue, setPositionValue] = useState("");

  const [imageValue, setImageValue] = useState("");

  const [teamValue, setTeamValue] = useState("");

  const [teamNameValue, setTeamNameValue] = useState("");

  const [colorValue, setColorValue] = useState("");

  const createTeam = props.createTeam;

  const dataForInputs = [
    {
      label: "Nome",
      placeholder: "Digite o seu nome",
      type: "text",
      required: true,
      value: nameValue,
      setState: setNameValue,
    },
    {
      label: "Cargo",
      placeholder: "Digite o seu cargo",
      type: "text",
      required: true,
      value: positionValue,
      setState: setPositionValue,
    },
    {
      label: "Imagem",
      placeholder: "Carregue a sua imagem",
      type: "text",
      value: imageValue,
      setState: setImageValue,
    },
  ];

  const dataForSecondInputs = [
    {
      label: "Nome",
      placeholder: "Digite o nome do time",
      type: "text",
      required: true,
      value: teamNameValue,
      setState: setTeamNameValue,
    },
    {
      label: "Cor",
      placeholder: "Digite a cor do time",
      type: "color",
      required: true,
      value: colorValue,
      setState: setColorValue,
    },
  ];

  const dataForList = {
    label: "Time",
    itens: [
      "Programação",
      "FrontEnd",
      "Data Science",
      "Devops",
      "UX e Desing",
      "Mobile",
      "Inovação e Gestão",
    ],
    value: teamValue,
    setState: setTeamValue,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createUser({
      id: uuidv4(),
      favorite: false,
      nameValue,
      positionValue,
      imageValue,
      teamValue,
    });
    setTeamValue("");
    setNameValue("");
    setPositionValue("");
    setImageValue("");
  };



  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        {dataForInputs.map((item, index) => (
          <FormInput key={index} data={item} />
        ))}
        <List data={dataForList} />
        <Button text="Criar Card" />
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTeam({ name: teamNameValue, color: colorValue });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        {dataForSecondInputs.map((item, index) => (
          <FormInput key={index} data={item} />
        ))}
        <Button text="Criar um novo time" />
      </form>
    </section>
  );
};

export default Form;
