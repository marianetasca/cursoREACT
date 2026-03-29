import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["maria", "pedro", "mateus"]);

  const [users, setUsers] = useState([
    { id: 1, name: "maria", age: 31 },
    { id: 2, name: "pedro", age: 28 },
    { id: 3, name: "mateus", age: 56 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
