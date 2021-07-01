import PersonalInfo from "./PersonalInfo";
import EducationInstance from "./EducationInstance";
import React, { useState } from 'react';
import styled from "styled-components";

function Container(props) {

    return (
        <DivWrapper>
            <PersonalInfo/>
            <EducationInstance/>
        </DivWrapper>
    );
}

const DivWrapper = styled.div`
    justify-content: center;
`; 

export default Container;