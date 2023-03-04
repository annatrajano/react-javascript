import "./form.css";

import FormInput from "../formInput";

const Form = (props) => {
  const data = props.data;

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        {data.map((item) => (
          <FormInput data={item} />
        ))}
      </form>
    </section>
  );
};

export default Form;
