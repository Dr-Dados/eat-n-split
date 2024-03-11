import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ friend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying == "user" ? paidByFriend : -paidByUser);
  };
  return (
    <form className="form-split-bill" onSubmit={submitHandler}>
      <h2>Split a bill with {friend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>🤷 Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) => {
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value);
        }}
      />
      <label>🏌🏽‍♂️{friend.name} expense</label>
      <input type="number" disabled value={paidByFriend} />
      <label>💰Who's paying the bill ? </label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend ">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
