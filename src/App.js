import './App.css';
import CVFormContainer from "./components/CVFormContainer";
import React, { useState } from 'react';



function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <CVFormContainer/>
    </>
  );
}

export default App;
