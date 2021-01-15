import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { isExistedMany } from "./helpers/searchCtry";
import Search from "./components/Search";
import FoundResult from "./components/FoundResult";
import Cac from "./components/Cac";

const App = () => {
  const [CtryClt, setCtryClt] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [foundCtryClt, setFoundCtry] = useState([]);
  const [isShownRes, setIsShownRes] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCtryClt(res.data);
    });
    // return () => {};
  }, []);

  const changePhraseHdlr = (evt) => {
    setSearchPhrase(evt.currentTarget.value);
  };

  const searchCtryHdlr = () => {
    setIsShownRes(true);
    const foundRes = isExistedMany(searchPhrase, CtryClt);
    setFoundCtry(foundRes);
  };

  const bimat = process.env.REACT_APP_WEATHER_API_KEY;
  const cac = process.env.REACT_APP_TEST_KEY;

  return (
    <div>
      <p>Hello there from country data</p>
      <Search iptChangeH={changePhraseHdlr} btnClickH={searchCtryHdlr} />
      <FoundResult foundRes={foundCtryClt} showRes={isShownRes} />
      {/* <p>Test process data: {cac}</p>
      <p>Test process data: {process.env.NODE_ENV}</p>
      <p>Bimat: {bimat}</p> */}
      {/* <Cac /> */}
    </div>
  );
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
