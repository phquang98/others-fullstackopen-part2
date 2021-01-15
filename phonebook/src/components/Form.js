import React from "react";

const Form = ({ handler1, handler2, addSubjH }) => {
  return (
    <form onSubmit={addSubjH}>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" onChange={handler1} />
        <br></br>
        <label htmlFor="pnum">Phonenumber: </label>
        <input id="pnum" onChange={handler2} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
