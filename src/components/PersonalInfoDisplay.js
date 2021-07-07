import React, { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function PersonalInfoDisplay(props) {

    return (
        <BackgroundDiv>
            <HeaderDiv>
                <StyledH1>{props.values.firstName} {props.values.lastName}</StyledH1>
                <StyledH2>{props.values.title}</StyledH2>
                <p>{props.values.description}</p>
            </HeaderDiv>
            <ContactDiv>
                <p><span>&#9993;</span> {props.values.email}</p>
                <FontAwesomeIcon icon={mapMarkerAlt}/>
            </ContactDiv>
        </BackgroundDiv>

    )

}

const BackgroundDiv = styled.div`
    text-align: left;
    font-family: Garamond;
`; 

const HeaderDiv = styled.div`
    text-align: left;
    background: #4D774E;
    color: white;
    padding-left: 20px;
    padding-top: 1px;
    height: 1.5in;
`; 

const ContactDiv = styled.div`
    text-align: left;
    background: #164A41;
    color: white;
    height: 1in;
    display: grid;
    grid-template-columns: repeat(2, )
    padding-left: 20px;
`; 

const StyledH1 = styled.h1`
    margin-bottom: 0px;
    font-size: 36px;
`;

const StyledH2 = styled.h2`
    margin-top: 0px;
    padding-top: 0px;
    font-size: 24px;
`;

export default PersonalInfoDisplay;