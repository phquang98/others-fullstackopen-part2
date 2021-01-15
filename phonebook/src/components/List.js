import React, { Fragment } from "react";

// lazy, should store the id to a var and somehow expose it to the handler for delete
const List = ({ dataClt, btnClickHdlr }) => {
  return (
    <Fragment>
      {dataClt.map((dataUnit) => (
        <div style={{ display: "flex", flexDirection: "row" }} key={dataUnit.id}>
          <p>
            {dataUnit.name}, Phone: {dataUnit.number}
          </p>
          <button onClick={btnClickHdlr}>{dataUnit.id}</button>
        </div>
      ))}
    </Fragment>
  );
};

export default List;
