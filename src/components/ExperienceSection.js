import React, { useState } from 'react';
import styled from "styled-components";
import ExperienceInstance from './ExperienceInstance';
import uniqid from "uniqid";


function ExperienceSection(props) {

    const [experienceInstances, setExperienceInstances] = useState([uniqid()]);

    const addOnClick = () => {
        setExperienceInstances(experienceInstances.concat(uniqid()))
    }

    const deleteOnClick = (event, item) => {
        const newExperienceInstances = experienceInstances.filter((id) => id !== item);
        setExperienceInstances(newExperienceInstances);
    }

    return(
        <StyledDiv>
            <h2>Experience</h2>
            {experienceInstances.map((item, index) => (
                <div key={item}>
                    <ExperienceInstance/>
                    <button onClick={(e) => deleteOnClick(e, item)}>Delete</button>
                </div>
            ))}
            <button onClick={addOnClick}>Add Job</button>
        </StyledDiv>    
    );
}

const StyledDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 10px;
`; 

export default ExperienceSection;