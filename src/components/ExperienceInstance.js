import React, { useState } from 'react';
import styled from "styled-components";
import TextInput from './TextInput';
import DateInput from './DateInput';


function ExperienceInstance(props) {
    
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
   
    return (
        <FormWrapper>
            <TextInput placeholder="Position" value={position}/>
            <TextInput placeholder="Company" value={company}/>
            <DateInput placeholder="Start Date" value={startDate}/>
            <DateInput placeholder="End Date" value={endDate}/>
        </FormWrapper>
    );

}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    color: blue;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    width: 50%;
`; 


export default ExperienceInstance;