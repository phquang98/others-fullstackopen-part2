import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";
import Search from "./components/Search";
import Form from "./components/Form";
import List from "./components/List";
import ErrorMessage from "./components/ErrorMessage";
import fakeServer from "./services/fakeServer";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPNum, setNewPNum] = useState("0123456789");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // axios.get("http://localhost:3001/persons").then((response) => {
    //   console.log("day la", response.data);
    //   setPersons(response.data);
    // });

    fakeServer.getRecordClt().then((recordClt) => setPersons(recordClt));
  }, []);

  // name existed -> return the name -> !truthy -> falsy
  // name dont existed -> return und -> !falsy -> truthy
  const isSubjExistedHelper = (subjName, clt) => {
    return clt.find((ele) => ele.name === subjName);
  };

  const addNameHandler = (evt) => {
    setNewName(evt.currentTarget.value);
  };

  const addPNumHandler = (evt) => {
    setNewPNum(evt.currentTarget.value);
  };

  // const updateSubjHandler = () => {
  //   fakeServer.updateRecord(evt.currentTarget.textContent, { name: newName, number: newPNum });
  // };

  const addSubjHandler = (evt) => {
    evt.preventDefault();
    // dont use tenary here cause logic too long
    if (isSubjExistedHelper(newName, persons)) {
      window.confirm(`Name ${newName} already existed! Click OK will change the phone number!`);
      const updatingRecord = persons.find((item) => item.name === newName);
      fakeServer.updateRecord(updatingRecord.id, { name: newName, number: newPNum });
      setNewName("");
    } else {
      // setPersons([...persons, { name: newName, number: newPNum }]);
      fakeServer.addRecord({ name: newName, number: newPNum });
      setErrorMsg("Added successfully");
    }
  };

  const deleteHandler = (evt) => {
    // pick your poison
    const deletingId1 = evt.currentTarget.textContent;
    // const deletingId2 = evt.currentTarget.innerText;
    // const deletingId3 = evt.currentTarget.innerHTML;
    console.log(deletingId1);
    fakeServer.removeRecord(deletingId1);
    window.confirm("The record you clicked is deleted.");
    // console.log(deletingId2);
    // console.log(deletingId3);
  };

  return (
    <div>
      {errorMsg !== "" && <ErrorMessage message={errorMsg} />}
      <h2>Phonebook</h2>
      <Search clt={persons} isFindName={isSubjExistedHelper} />
      <Form handler1={addNameHandler} handler2={addPNumHandler} addSubjH={addSubjHandler} />
      <h2>Numbers</h2>
      <List dataClt={persons} btnClickHdlr={deleteHandler} />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
