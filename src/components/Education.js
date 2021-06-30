import React, { useState } from 'react';
import styled from "styled-components";
import TextInput from './TextInput';
import DateInput from './DateInput';


function Education(props) {
    
    const [universityName, setUniversityName] = useState("");
    const [degreeReceived, setDegreeReceived] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
   
    return (
        <FormWrapper>
            <StyledTextInput placeholder="University" value={universityName}/>
            <StyledTextInput placeholder="B.S. - Educational Studies" value={degreeReceived}/>
            <DateInput value={startDate}/>
            <DateInput value={endDate}/>
        </FormWrapper>
    );

}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    color: blue;
    width: 300px;
`; 

const StyledTextInput = styled(TextInput)`
    width: 300px;
`; 

export default Education;