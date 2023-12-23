import React, { useState, useEffect } from 'react';
import './m.navbar.css'

function M_Navbar() {

  const [logo, setLogo] = useState("");
  const [menui, setMenui] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/main_page`)
      .then((response) => response.json())
      .then((data) => getData(data))
      .catch((error) => console.error(error));
  }, []);

  function getData(data) {
    setLogo("http://127.0.0.1:8000" + data.logo);
    fetch("http://127.0.0.1:8000/api/menuitems")
      .then((response) => response.json())
      .then((data) => setMenui(data))
      .catch((error) => console.error(error));
  }
  return (
    <div className="borderi">
      <div className="container">
        <div className="item">
            
        </div>
        <div className="">
        <img width="150" src={logo} alt="" />
          {menui.map((val, i) => {
            return (
                <a className="btn btn-top" key={i} href={val.link} >
                  <span>{val.name}</span>
                </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default M_Navbar;

