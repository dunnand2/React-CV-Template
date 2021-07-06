import React, { useState } from 'react';
import styled from "styled-components";
import EducationInstance from './EducationInstance';
import uniqid from "uniqid";


function EducationSection(props) {

    const [educationInstances, setEducationInstances] = useState([uniqid()]);

    const addOnClick = () => {
        setEducationInstances(educationInstances.concat(uniqid()))
    }

    const deleteOnClick = (event, item) => {
        const newEducationInstances = educationInstances.filter((id) => id !== item);
        setEducationInstances(newEducationInstances);
    }

    return(
        <StyledDiv>
            <StyledHeader>Education</StyledHeader>
            {educationInstances.map((item, index) => (
                <div key={item}>
                    <EducationInstance/>
                    <button onClick={(e) => deleteOnClick(e, item)}>Delete</button>
                </div>
            ))}
            <button onClick={addOnClick}>Add Degree</button>
        </StyledDiv>    
    );
}

const StyledDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 10px;
`; 

const StyledHeader = styled.h2`
    margin: 0;
`;

export default EducationSection;