import React from "react";
import "../UserList/UserList.css";

import { dataList } from "../../../src/data/data";
import { UserCard } from "../UserCard/UserCard";
import { User } from "../User/User";

export const UserList = ({ useMode }) => (
  <div className="blogList">
    {dataList.map((user, index) =>
      useMode ? (
        <UserCard
          name={`${user.name.first}`}
          email={`${user.email}`}
          date={`${new Date(user.dob.date).getDate()}-${
            new Date(user.dob.date).getMonth() + 1
          }-${new Date(user.dob.date).getFullYear()}`}
          img={`${user.picture.large} `}
          key={index}
        />
      ) : (
        <User
          name={`${user.name.first}`}
          email={`${user.email}`}
          date={`${new Date(user.dob.date).getDate()}-${
            new Date(user.dob.date).getMonth() + 1
          }-${new Date(user.dob.date).getFullYear()}`}
          img={`${user.picture.thumbnail} `}
          key={index}
        />
      )
    )}
  </div>
);
