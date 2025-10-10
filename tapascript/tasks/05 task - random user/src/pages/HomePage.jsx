import Header from "../components/Header/Header.jsx";
import UserUpdate from "../components/UserUpdate/UserUpdate.jsx";
import UserLists from "../components/UserLists/UserLists.jsx";

import { useState } from "react";

function HomePage() {
  const [users, setUsers] = useState([]);

  const randomNames = ["Alex", "Bob", "Chistine", "Daniel", "Emily"];
  const randomOccupation = [
    "Front-end Developer",
    "Back-end Developer",
    "Full-stack Developer",
    "Designer",
    "Tester",
  ];

  function addRandomUser() {
    const newUser = {
      id: crypto.randomUUID(),
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      age: Math.floor(Math.random() * 30) + 20,
      occupation:
        randomOccupation[Math.floor(Math.random() * randomOccupation.length)],
    };

    setUsers([...users, newUser]);
  }

  function removeUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <>
      <Header />
      <UserUpdate users={users} onAdd={addRandomUser} />
      <UserLists users={users} onRemove={removeUser} />
    </>
  );
}

export default HomePage;
