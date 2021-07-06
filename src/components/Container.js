import CVFormContainer from "./CVFormContainer";
import CVDisplayContainer from "./CVDisplayContainer";
import React, { useState } from 'react';
import styled from "styled-components";

function Container(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")


    const personalInfoCallbacks = {liftFirstName: setFirstName, liftLastName: setLastName, liftPhone: setPhone, 
        liftEmail: setEmail, liftAddress: setAddress, liftDescription: setDescription, liftTitle: setTitle};

    const personalInfoValues = {firstName: firstName, lastName: lastName, phone: phone, 
    email: email, address: address, description: description, title: title};

  

    return (
        <DivWrapper>
            <CVFormContainer callbacks={personalInfoCallbacks} values={personalInfoValues}/>
            <CVDisplayContainer personalInfoValues={personalInfoValues}/>
        </DivWrapper>
    );
}

const DivWrapper = styled.div`
    justify-content: center;
    background: papayawhip;
    min-height: 100vh;
    padding-bottom: 10px;
`; 

export default Container;