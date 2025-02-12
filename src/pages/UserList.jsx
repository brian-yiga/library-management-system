import React from "react";

const UserList = ({ members }) => {
  return (
    <div>
      <h2>List Of Members</h2>
      <ul className="membersContainer">
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
