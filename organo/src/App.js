// # Main Import
import { useState } from "react";
import { Banner, Form } from "./components";
import Teams from "./components/teams";

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57C278",
    },
    {
      name: "FrontEnd",
      color:  "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Desing",
      color: "#DB6EBF",
    },
    {
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    setUsers([...users, user]);
  };

  function userDelete() {
    console.log("deletando colaborador");
  }

  function changeColorTeam(cor, nome) {
    setTeams(
      teams.map((team) => {
        if (team.name === nome) {
          team.color = cor;
        }
        return team;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Form createUser={(user) => createUser(user)} />
      {teams.map((item, index) => (
        <Teams
          key={index}
          data={item}
          changeColorTeam={changeColorTeam}
          teams={teams}
          userDelete={userDelete}
          users={users.filter((user) => user.teamValue === item.name)}
        />
      ))}
    </div>
  );
}

export default App;
