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
    document.querySelector("#returnChangeDiv").style.display = "none";
  }

  function onResetHandler(e) {
    let inputField = document.querySelectorAll("input");
    Array.from(inputField).map((item) => (item.value = ""));
    setBill("");
    setAmount("");
    setObject({});
    setError("");
    document.querySelector("#returnChangeDiv").style.display = "none";
    document.querySelector("#amount-div").style.display = "none";
    document.querySelector("#next-button").style.display = "block";
  }

  function clickHandler() {
    let billAmount = Number(document.querySelector("#billAmount").value);
    if (billAmount === "" || billAmount < 1) {
      setError("Bill Amount must be greater than 1");
    } else {
      document.querySelector("#amount-div").style.display = "block";
      document.querySelector("#next-button").style.display = "none";
    }
  }

  function onClickHandler() {
    if (amount === "") setError(`Amount given can't be empty`);
    else if (Number(amount) < Number(bill))
      setError("Amount given must be greater than bill amount");
    else {
      setObject(cashCalculator(amount - bill));
      document.querySelector("#returnChangeDiv").style.display = "block";
    }
  }

  return (
    <div className="App">
      <h1>Cash Register</h1>
      <div className="flex-container">
        <label htmlFor="billAmount">Enter the bill Amount:</label>
        <input
          id="billAmount"
          className="input-text"
          type="number"
          name="bill"
          min="1"
          onChange={onChangeHandler}
        />
        <button id="next-button" onClick={clickHandler}>
          Next
        </button>
      </div>
      <div id="amount-div">
        <p>Enter the Amount given by user:</p>
        <input
          className="input-text"
          type="number"
          name="amount"
          onChange={onChangeHandler}
        />
        <div>
          <button onClick={onClickHandler}>Check Return Money</button>
          <button onClick={onResetHandler}>Reset Fields</button>
        </div>
      </div>
      <div className="alert">{error}</div>
      <div id="returnChangeDiv">
        <p className="return-para">
          Please return left amount <strong>{amount - bill}</strong> as :
        </p>
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
    </div>
  );
}
