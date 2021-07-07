import React, { useState } from 'react';
import styled from "styled-components";

function PersonalInfoDisplay(props) {

    return (
        <BackgroundDiv>
            <FormatDiv>
                <StyledH1>{props.values.firstName} {props.values.lastName}</StyledH1>
                <StyledH2>{props.values.title}</StyledH2>
                <p>{props.values.description}</p>
            </FormatDiv>
        </BackgroundDiv>

    )

}

const BackgroundDiv = styled.div`
    text-align: left;
    width: 8.5in;
    height: 1.5in;
    background: #14557B;
`; 

const FormatDiv = styled.div`
    text-align: left;
    background: #14557B;
    color: white;
    padding-left: 20px

`; 


const StyledH1 = styled.h1`
    margin-bottom: 0px;
`;

const StyledH2 = styled.h2`
    margin-top: 5px;
`;

export default PersonalInfoDisplay;