import React, { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import initialFriends from "./InitialFriends";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSplitbill = (value) => {
    setFriends((friends) =>
      friends.map((el) =>
        el.id === selectedFriend.id
          ? { ...el, balance: el.balance + value }
          : el
      )
    );
  };

  const selectFriendHandler = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };
  const addFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };
  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={selectFriendHandler}
        />
        {showAddFriend && <FormAddFriend onAddFriend={addFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          friend={selectedFriend}
          onSplitBill={handleSplitbill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
};

export default App;
