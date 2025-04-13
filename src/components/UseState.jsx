import React, { useState } from "react";

const UseState = () => {
  const [friends, setFriends] = useState(["Asif", "Nazmul"]);

  const addOneFriend = () => setFriends([...friends, "Hayder"]);

  const removeOneFriend = () =>
    setFriends(friends.filter((friend) => friend !== "Nazmul"));

  const updateOneFriend = () =>
    setFriends(
      friends.map((friend) => (friend === "Asif" ? friend + " Bodda" : friend))
    );

  const buttonStyle =
    "px-4 py-2 btn-primary bg-accent rounded-sm cursor-pointer";

  return (
    <>
      <div className="flex-col border-4 border-blue-400 p-5">
        <h1>Practicing useState</h1>

        {friends.map((friend) => (
          <li key={Math.random()}>{friend}</li>
        ))}

        <div className="flex gap-2">
          <button onClick={addOneFriend} className={buttonStyle}>
            Add
          </button>
          <button onClick={removeOneFriend} className={buttonStyle}>
            Remove
          </button>
          <button onClick={updateOneFriend} className={buttonStyle}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default UseState;
