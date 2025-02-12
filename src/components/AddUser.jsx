import React, { useState } from "react";

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAddUser({ name });
    setName("");
  };

  return (
    <div className="addMember">
      <h2>Add a New Member</h2>
      <form onSubmit={handleSubmit} className="memberForm">
        <input
          type="text"
          placeholder="Member Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="addMemberBtn">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddUser;
