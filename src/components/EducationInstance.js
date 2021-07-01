import React, { useState } from 'react';
import styled from "styled-components";
import TextInput from './TextInput';
import DateInput from './DateInput';


function EducationInstance(props) {
    
    const [universityName, setUniversityName] = useState("");
    const [degreeReceived, setDegreeReceived] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
   
    return (
        <FormWrapper>
            <TextInput placeholder="University" value={universityName}/>
            <TextInput placeholder="B.S. - Educational Studies" value={degreeReceived}/>
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
    margin-bottom: 20px;
    width: 50%;
`; 


export default EducationInstance;