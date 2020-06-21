import { useState } from "react";

const Prices = ({ bpi }) => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for{" "}
          <span style={{ color: "white" }}>{bpi[currency].description}</span>:{" "}
          <span className="badge badge-info"> {bpi[currency].code} </span>
          <strong style={{ color: "#5bc0de" }}> {bpi[currency].rate} </strong>
        </li>
      </ul>
      <br />
      <div className="container col-12 col-sm-4">
        <select
          onChange={e => {
            setCurrency(e.target.value);
          }}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );
};

export default Prices;
