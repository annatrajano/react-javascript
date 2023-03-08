// # Main Import
import { useState } from "react";
import { Banner, Form } from "./components";
import Teams from "./components/teams";


function App() {
  const [users, setUsers] = useState([]);

  const createUser  = (user) => {
    setUsers([...users, user ])
  }

  return (
    <div className="App">
      <Banner />
      <Form  createUser={user => createUser(user)} />
      <Teams  nome="Programação"/>
    </div>
  );
}

export default App;
