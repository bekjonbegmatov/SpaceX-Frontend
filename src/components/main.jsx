import React, { useState, useEffect } from "react";
import "./main.css";

function Main(props) {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/main_page")
      .then((response) => response.json())
      .then((data) => getdata(data))
      .catch((error) => console.error(error));
  }, []);

  const [bigt, setBigT] = useState("");
  const [tit, setTit] = useState("");
  const [btn_text, setBtntext] = useState("");

  const [advantages, setAdvantages] = useState([]);

  function getdata(data) {
    let title = data.title;
    let word = "";
    let signal = false;

    for (let i = 0; i < title.length; i++) {
      if (title[i] === "*") {
        signal = !signal;
      } else if (signal === true) {
        word += title[i];
      }
    }
    title = title.replace(`*${word}*`, "");
    setBigT(word.toUpperCase());
    setTit(title);
    setBtntext(data.btn_text);

    getadvantages();
  }
  function getadvantages() {
    fetch("http://127.0.0.1:8000/api/advantages")
      .then((response) => response.json())
      .then((data) => setAdvantages(data))
      .catch((error) => console.error(error));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col text1">
          <div className="grad">
            <h1>{bigt}</h1>
            <p className="tit">{tit}</p>
          </div>
          <button className="button-80 bhg" role="button">
            {btn_text}
          </button>
        </div>
        <div className="col griid">
          {advantages.map((val, i) => {
            return (
              <div key={i} className="ittem bar-anchor">
                <p>{val.text1}</p>
                <h1>
                  {val.number}
                  {val.is_percent && "%"}
                </h1>
                <p>{val.text2}</p>
                <div className="transition-bar"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
