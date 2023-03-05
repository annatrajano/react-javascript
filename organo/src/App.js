// # Main Import
import { useState } from "react";
import { Banner, Form } from "./components";


function App() {
  const [users, setUsers] = useState([]);

  const createUser  = (user) => {
    setUsers([...users, user ])
  }

  return (
    <div className="App">
      <Banner />
      <Form  createUser={user => createUser(user)} />
    </div>
  );
}

export default App;
