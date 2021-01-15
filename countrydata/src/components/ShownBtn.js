import React, { Fragment, useState } from "react";

// here should use useContext for avoid drilling
const ShownBtn = ({ renderFnc, data }) => {
  // wrong, as problem required state should only be at idex.js (?)
  const [isClickBtn, setIsClickBtn] = useState(false);

  const clickToShowCtry = () => {
    setIsClickBtn(true);
  };

  return (
    <Fragment>
      <button style={{ width: "100px", height: "40px" }} onClick={clickToShowCtry}>
        Show country
      </button>
      {isClickBtn && renderFnc(data)}
      {console.log("tai sao co sai ???", data.flag)}
    </Fragment>
  );
};

export default ShownBtn;
