import React from "react";
import { UserList } from "./components/UserList.component";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Faraz",
      image:
        "https://images.pexels.com/photos/5886422/pexels-photo-5886422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
}
