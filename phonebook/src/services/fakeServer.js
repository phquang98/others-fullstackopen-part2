import axios from "axios";

const paramURL = "persons";
const baseURL = `http://localhost:3001/${paramURL}`;

// should have a state to track modifying the db -> make it as deps for useEffects for rerender

const getRecordClt = async () => {
  const res = await axios.get(baseURL);
  console.log("This is response promise", res);
  try {
    return res.data;
  } catch (err) {
    return alert("Sth wrong!");
  }
};

const addRecord = async (newRecord) => {
  const res = await axios.post(baseURL, newRecord);
  return res.data;
};

const removeRecord = async (idRecord) => {
  const res = await axios.delete(`${baseURL}/${idRecord}`);
  return res.data;
};

const updateRecord = async (idRecord, newRecord) => {
  const res = await axios.put(`${baseURL}/${idRecord}`, newRecord);
  try {
    return res.data;
  } catch (err) {
    return alert("Sth wrong!");
  }
};

const fakeServer = { getRecordClt, addRecord, removeRecord, updateRecord };
export default fakeServer;
