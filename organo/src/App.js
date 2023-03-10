// # Main Import
import { useState } from "react";
import { Banner, Form } from "./components";
import Teams from "./components/teams";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "FrontEnd",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Desing",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFF5D9",
      secondaryColor: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
  ];

  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Banner />
      <Form createUser={(user) => createUser(user)} />
      {teams.map((item, index) => (
        <Teams key={index} data={item} />
      ))}
    </div>
  );
}

export default App;
