import React, { useState } from "react";
import Button from "./Button";
const Friend = ({ friend, onSelectFriend, selectedFriend }) => {
  const selectFriendHandler = () => {
    onSelectFriend(friend);
  };
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance > 0 ? "green" : friend.balance < 0 ? `red` : ``
        }
      >
        {friend.balance > 0
          ? `${friend.name} owns you ${friend.balance}$`
          : friend.balance < 0
          ? `You own ${friend.name} ${-friend.balance}$`
          : `You and ${friend.name} are even`}
      </p>
      <Button onClick={selectFriendHandler}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
