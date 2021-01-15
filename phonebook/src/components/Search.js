import React, { Fragment, useState } from "react";

const Search = ({ clt, isFindName }) => {
  const [searchName, setSearchName] = useState("");

  const searchHandler = (evt) => {
    setSearchName(evt.currentTarget.value);
  };

  return (
    <Fragment>
      <label htmlFor="searchName">Input person's name here: </label>
      <input id="searchName" onChange={searchHandler}></input>
      {isFindName(searchName, clt) && (
        <p>
          {isFindName(searchName, clt).name}, phone: {isFindName(searchName, clt).pnum}
        </p>
      )}
      <hr></hr>
    </Fragment>
  );
};

export default Search;
