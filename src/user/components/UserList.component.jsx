import React from "react";
import { UserItem } from "./UserItem.component";
import Card from "../../shared/components/UIElements/Card.component";
import "./css/UserList.css";
export const UserList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Users Not found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};
