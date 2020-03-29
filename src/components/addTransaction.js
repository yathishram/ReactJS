import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/globalState";
import uuid from "uuid/v1";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: uuid(),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} id="text" placeholder="Enter" onChange={e => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, postive - income)
          </label>
          <input type="number" id="amount" value={amount} placeholder="Enter" onChange={e => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
