import PersonalInfo from "./PersonalInfo";
import EducationSection from "./EducationSection";
import React, { useState } from 'react';
import styled from "styled-components";
import ExperienceSection from "./ExperienceSection";

function CVFormContainer(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const callbacks = {liftFirstName: {setFirstName}, liftLastName: {setLastName}, liftPhone: {setPhone}, 
        liftEmail: {setEmail}, liftAddress: {setAddress}};

    const values = {firstName: {firstName}, lastName: {lastName}, phone: phone, 
    email: email, address: address};

    return (
        <DivWrapper>
            <PersonalInfo callbacks={callbacks} values={values}/>
            <EducationSection/>
            <ExperienceSection/>
        </DivWrapper>
    );
}

const DivWrapper = styled.div`
    justify-content: center;
    background: papayawhip;
    min-height: 100vh;
`; 

export default CVFormContainer;