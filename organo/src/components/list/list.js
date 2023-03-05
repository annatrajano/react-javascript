// # Style
import "./list.css";

const List = (props) => {

  const data = props.data

  const handleChange = (e) => {
    data.setState(e.target.value);
  }

  return (
    <div className="list">
      <label>{data.label}</label>
      <select value={data.value} onChange={handleChange}>
        {data.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default List;
