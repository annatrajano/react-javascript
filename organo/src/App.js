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


  const inicial = [
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'JULIANA AMOASEI',
      positionValue: 'Desenvolvedora de software e instrutora',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      teamValue: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'DANIEL ARTINE',
      positionValue: 'Engenheiro de Software na Stone Age',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      teamValue: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'GUILHERME LIMA',
      positionValue: 'Desenvolvedor Python e JavaScript na Alura',
      imageValue: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      teamValue: teams[0].name
    },
    {
      id: uuidv4(),
      nameValue: 'PAULO SILVEIRA',
      positionValue: 'Hipster e CEO da Alura',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      teamValue: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'JULIANA AMOASEI',
      positionValue: 'Desenvolvedora de software e instrutora',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      teamValue: teams[1].name
    },
    {
      id: uuidv4(),
      nameValue: 'DANIEL ARTINE',
      positionValue: 'Engenheiro de Software na Stone Age',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      teamValue: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'GUILHERME LIMA',
      positionValue: 'Desenvolvedor Python e JavaScript na Alura',
      imageValue: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      teamValue: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'PAULO SILVEIRA',
      positionValue: 'Hipster e CEO da Alura',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      teamValue: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'JULIANA AMOASEI',
      positionValue: 'Desenvolvedora de software e instrutora',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      teamValue: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'DANIEL ARTINE',
      positionValue: 'Engenheiro de Software na Stone Age',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      teamValue: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'GUILHERME LIMA',
      positionValue: 'Desenvolvedor Python e JavaScript na Alura',
      imageValue: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      teamValue: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'PAULO SILVEIRA',
      positionValue: 'Hipster e CEO da Alura',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      teamValue: teams[2].name
    },
    {
      id: uuidv4(),
      nameValue: 'JULIANA AMOASEI',
      positionValue: 'Desenvolvedora de software e instrutora',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      teamValue: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'DANIEL ARTINE',
      positionValue: 'Engenheiro de Software na Stone Age',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      teamValue: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'GUILHERME LIMA',
      positionValue: 'Desenvolvedor Python e JavaScript na Alura',
      imageValue: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      teamValue: teams[3].name
    },
    {
      id: uuidv4(),
      nameValue: 'PAULO SILVEIRA',
      positionValue: 'Hipster e CEO da Alura',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      teamValue: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'JULIANA AMOASEI',
      positionValue: 'Desenvolvedora de software e instrutora',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      teamValue: teams[4].name
    },
    {
      id: uuidv4(),
      nameValue: 'DANIEL ARTINE',
      positionValue: 'Engenheiro de Software na Stone Age',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      teamValue: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'GUILHERME LIMA',
      positionValue: 'Desenvolvedor Python e JavaScript na Alura',
      imageValue: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      teamValue: teams[4].name
    },
    {
      id: uuidv4(),
      nameValue: 'PAULO SILVEIRA',
      positionValue: 'Hipster e CEO da Alura',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      teamValue: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'JULIANA AMOASEI',
      positionValue: 'Desenvolvedora de software e instrutora',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      teamValue: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'DANIEL ARTINE',
      positionValue: 'Engenheiro de Software na Stone Age',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      teamValue: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'GUILHERME LIMA',
      positionValue: 'Desenvolvedor Python e JavaScript na Alura',
      imageValue: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      teamValue: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      nameValue: 'PAULO SILVEIRA',
      positionValue: 'Hipster e CEO da Alura',
      imageValue: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      teamValue: teams[5].name
    },
  ]

  const [users, setUsers] = useState(inicial);

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

  function makeFavoriteUser(id) {
    setUsers(users.map(user => {
      if(user.id === id) user.favorite = !user.favorite;
      return user;
    }))
  }


  function createTeam({name, color}) {
    setTeams([...teams, { name, color, id: uuidv4() }])
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
          makeFavoriteUser={makeFavoriteUser}
          
          users={users.filter((user) => user.teamValue === item.name)}
        />
      ))}
    </div>
  );
}

export default App;
