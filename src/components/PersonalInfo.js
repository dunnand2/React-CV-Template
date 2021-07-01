import React, { useState } from 'react';
import styled from "styled-components";
import TextInput from './TextInput';

function PersonalInfo(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    

    return (
        <StyledDiv>
            <h2>Personal Information</h2>
            <FormWrapper>
                <TextInput placeholder="First Name" value={firstName}/>
                <TextInput placeholder="Last Name" value={lastName}/>
                <TextInput placeholder="(###)-###-####" value={phone}/>
                <TextInput placeholder="youremail@domain.com" value={email}/>
                <TextInput placeholder="1234 Generic Ln, Anytown, USA" value={address}/>
            </FormWrapper>
        </StyledDiv>
    );
};

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    color: blue;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 50%;
`; 

const StyledDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`; 


export default PersonalInfo;