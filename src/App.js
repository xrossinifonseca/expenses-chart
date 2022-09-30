import "./App.css";
import { useState } from "react";
import logo from "./images/logo.svg";
import data from "./data.json";

function App() {
  const [onMount, setonMount] = useState(false);

  const grafic = (i) => {
    if (i.amount > 15 && i.amount < 18) {
      return "grafic-low";
    } else if (i.amount > 18 && i.amount < 24) {
      return "grafic-mediun";
    } else if (i.amount > 24 && i.amount < 35) {
      return "grafic-high";
    } else if (i.amount > 35 && i.amount < 45) {
      return "grafic-very-high";
    } else if (i.amount > 35 && i.amount < 54) {
      return "big";
    }
  };

  const amountsWeek = data.map((soma) => soma.amount);
  const totalWeek = amountsWeek.reduce((acc, curr) => acc + curr);

  return (
    <main>
      <div className="container">
        <div className="head-chart">
          <span>
            <h3> My balance</h3>
            <h2>$ 921.48</h2>
          </span>
          <img src={logo} alt="logo" />
        </div>

        <div className="body-chart">
          <h1>Spending - Last 7 Days</h1>
          <div className="data-chart">
            {data.map((item) => (
              <div key={item.amount} className="chart">
                {onMount && <span className="amount">${item.amount}</span>}
                <span
                  className={`${grafic(item)}`}
                  onMouseOver={() => setonMount(true)}
                  onMouseLeave={() => setonMount(false)}
                ></span>
                <p>{item.day}</p>
              </div>
            ))}
          </div>
          <div className="footer-chart">
            <span>
              <h5>Total this week</h5>
              <h2>$ {totalWeek}</h2>
            </span>

            <span>
              <p className="last-month"> +2,4%</p>
              <h5>from last week</h5>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
