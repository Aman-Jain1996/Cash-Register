import "./styles.css";
import cashCalculator from "./cashCalculator";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [amount, setAmount] = useState("");
  const [object, setObject] = useState({});
  const [error, setError] = useState("");

  function onChangeHandler(e) {
    if (e.target.name === "bill") setBill(e.target.value);
    else setAmount(e.target.value);
    setError("");
  }

  function onResetHandler(e) {
    let inputField = document.querySelectorAll("input");
    Array.from(inputField).map((item) => (item.value = ""));
    setBill("");
    setAmount("");
    setObject({});
    setError("");
  }

  function showInput() {
    if (bill === "") return "false";
  }

  function onClickHandler() {
    if (amount === "" || bill === "")
      setError('Bill and Amount can"t be empty');
    else if (Number(amount) < Number(bill))
      setError("Amount given must be greater than bill amount");
    else if (isNaN(bill) || isNaN(amount))
      setError("Amount and bill fields must be entered with number");
    else setObject(cashCalculator(amount - bill));
  }

  return (
    <div className="App">
      <h1>Cash Register</h1>
      <div className="flex-container">
        <label>Enter the bill Amount:</label>
        <input
          className="input-text"
          type="text"
          name="bill"
          onChange={onChangeHandler}
        />
        <label>Enter the Amount given by user:</label>
        <input
          className="input-text"
          type="text"
          name="amount"
          onChange={onChangeHandler}
          disabled={showInput()}
        />
      </div>
      <button onClick={onClickHandler}>Check Return Money</button>
      <button onClick={onResetHandler}>Reset Fields</button>
      <div className="alert">{error}</div>
      <label className="return-label">Please return left amount as :</label>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <td>₹ 2000</td>
              <td>₹ 500</td>
              <td>₹ 100</td>
              <td>₹ 20</td>
              <td>₹ 10</td>
              <td>₹ 5</td>
              <td>₹ 1</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{object[2000]}</td>
              <td>{object[500]}</td>
              <td>{object[100]}</td>
              <td>{object[20]}</td>
              <td>{object[10]}</td>
              <td>{object[5]}</td>
              <td>{object[1]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
