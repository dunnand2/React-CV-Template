import PersonalInfo from "./PersonalInfo";
import EducationSection from "./EducationSection";
import React, { useState } from 'react';
import styled from "styled-components";
import ExperienceSection from "./ExperienceSection";

function CVFormContainer(props) {

    return (
        <DivWrapper>
            <PersonalInfo callbacks={props.callbacks} values={props.values}/>
            <EducationSection/>
            <ExperienceSection/>
        </DivWrapper>
    );
}

const DivWrapper = styled.div`
    justify-content: center;
    background: papayawhip;
`; 

export default CVFormContainer;