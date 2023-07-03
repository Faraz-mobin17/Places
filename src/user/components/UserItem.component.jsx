import React from "react";
import "./css/UserItem.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../../shared/components/UIElements/Card.component";
import Avatar from "../../shared/components/UIElements/Avatar.component";
export const UserItem = ({ image, name, placeCount, id }) => {
  return (
    <>
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar image={image} alt={name} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>
                {placeCount} {placeCount === 1 ? "place" : "places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </>
  );
};
