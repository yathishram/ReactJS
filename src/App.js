import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpense from "./components/incomeExpense";
import TransactionList from "./components/transactionlist";
import AddTransaction from "./components/addTransaction";

import { GlobalProvider } from "./contexts/globalState";
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalProvider>
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
          </div>
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
