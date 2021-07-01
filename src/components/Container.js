import PersonalInfo from "./PersonalInfo";
import EducationSection from "./EducationSection";
import React, { useState } from 'react';
import styled from "styled-components";
import ExperienceSection from "./ExperienceSection";

function Container(props) {

    return (
        <DivWrapper>
            <PersonalInfo/>
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

export default Container;