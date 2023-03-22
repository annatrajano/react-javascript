// # Main Import
import { useState } from "react";
import { Banner, Form } from "./components";
import Teams from "./components/teams";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "FrontEnd",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Desing",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    setUsers([...users, user]);
  };

  function userDelete(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function changeColorTeam(cor, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = cor;
        }
        return team;
      })
    );
  }

  function createTeam(newTeam) {
    setTeams(...teams, { ...newTeam, id:uuidv4() });
  }

  return (
    <div className="App">
      <Banner />
      <Form createUser={(user) => createUser(user)} createTeam={createTeam} />
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
