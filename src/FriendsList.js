import React from "react";
import Friend from "./Friend";
const FriendsList = ({ friends, selectedFriend, onSelectFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
