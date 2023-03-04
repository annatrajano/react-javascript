// # Main Import
import { Banner, Form } from "./components";

const dataForForms = [
  {
    label: "Nome",
    placeholder: "Digite o seu nome",
    type: "text",
  },
  {
    label: "Cargo",
    placeholder: "Digite o seu cargo",
    type: "text",
  },
  {
    label: "Imagem",
    placeholder: "Carregue a sua imagem",
    type: "text",
  },
];

function App() {
  return (
    <div className="App">
      <Banner />
      <Form  data={dataForForms}/>
    </div>
  );
}

export default App;
