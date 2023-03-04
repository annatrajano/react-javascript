import "./formInput.css";

const FormInput = (props) => {
  const data = props.data;

  return (
    <div className="form-input">
      <label>{data.label}</label>
      <input placeholder={data.placeholder} type={data.type} />
    </div>
  );
};

export default FormInput;
