import React, { Fragment } from "react";

// bad implement, as requirement dont allow btn
const Search = ({ iptChangeH, btnClickH }) => {
  return (
    <Fragment>
      <label htmlFor="searchName"></label>
      <input onChange={iptChangeH} type="text" id="searchName" />
      <button onClick={btnClickH}>Search</button>
    </Fragment>
  );
};

export default Search;
