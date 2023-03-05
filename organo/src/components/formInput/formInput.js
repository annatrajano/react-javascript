
import "./formInput.css";

const FormInput = (props) => {
  const data = props.data;

  const handleChange = (e) => {
    data.setState(e.target.value);
  }

  return (
    <div className="form-input">
      <label>{data.label}</label>
      <input value={data.value} onChange={handleChange} placeholder={data.placeholder} type={data.type} required={data.required} name={data.label} />
    </div>
  );
};

export default FormInput;
