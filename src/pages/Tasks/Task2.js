
import React, { useState } from "react";
import "./Task2.css";

const Task2 = () => {
  const [display, setDisplay] = useState("123");

  const handleButtonClick = (id, innerText) => {
    if (id === "AC") {
      setDisplay("");
    } else if (id === "DEL") {
      setDisplay(display.slice(0, -1));
    } else if (id === "=") {
      setDisplay(String(findAns(display)));
    } else if (id === "dot") {
      if (display.includes(".")) return;
      setDisplay(display + innerText);
    } else if (["+", "-", "*", "/", "%"].includes(id)) {
      const lastChar = display.slice(-1);
      if (["+", "-", "*", "/", "%"].includes(lastChar)) {
        setDisplay(display.slice(0, -1) + id);
      } else {
        if (["+", "-", "*", "/", "%"].some((op) => display.includes(op))) {
          setDisplay(String(findAns(display)) + id);
        } else {
          setDisplay(display + id);
        }
      }
    } else {
      setDisplay(display + innerText);
    }
  };

  const findAns = (str) => {
    let values;
    let ans = 0;

    if (str.includes("+")) {
      values = str.split("+");
      ans = Number(values[0]) + Number(values[1]);
    } else if (str.includes("-")) {
      values = str.split("-");
      ans = Number(values[0]) - Number(values[1]);
    } else if (str.includes("*")) {
      values = str.split("*");
      ans = Number(values[0]) * Number(values[1]);
    } else if (str.includes("/")) {
      values = str.split("/");
      ans = Number(values[0]) / Number(values[1]);
    } else if (str.includes("%")) {
      values = str.split("%");
      ans = Number(values[0]) % Number(values[1]);
    }

    return ans;
  };

  return (
    <div className="mainCalc d-flex justify-content-center">
      <div className="calculator ">
        <div className="displayCalc">{display}</div>
          <div className="buttonsDivCalc d-flex justify-content-center  align-items-center">
        <div className="buttonsCalc">
            
          {[
            "AC",
            "DEL",
            "%",
            "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "0",
            "00",
            "dot",
            "=",
          ].map((btn) => (
            <button
              key={btn}
              id={btn}
              className={
                btn === "AC" || btn === "DEL" || btn === "="
                  ? "darkestCalc"
                  : btn === "dot" || ["+", "-", "*", "/", "%"].includes(btn)
                  ? "semiDarkCalc"
                  : "lightestCalc"
              }
              onClick={() => handleButtonClick(btn, btn === "dot" ? "." : btn)}
            >
              {btn === "dot" ? "." : btn}
            </button>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
