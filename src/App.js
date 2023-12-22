import React, { useEffect, useState } from "react";
import "./App.css";

import Main from "./components/main";
import Navbar from "./components/navbar/navber";

import M_Navbar from "./components/mobile/m.navbar/m.navbar";

function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="App">
      {matches && (
        <div className="">
          <Navbar />
          <Main />
        </div>
      )}
      {!matches && 
        <div>
          <M_Navbar />
        </div>
      }

    </div>
  );
}

export default App;
