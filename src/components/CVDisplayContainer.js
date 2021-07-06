import React, { useState } from 'react';
import styled from "styled-components";
import PersonalInfoDisplay from './PersonalInfoDisplay';


function CVDisplayContainer(props) {
    

    return (
        <DivWrapper>
            <PersonalInfoDisplay values={props.personalInfoValues}/>
        </DivWrapper>
    )
}

const DivWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    text-align: center;
    width: 8.5in;
    height: 11in;
    background: white;
`; 

export default CVDisplayContainer;