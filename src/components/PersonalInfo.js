import React, { useState } from 'react';
import styled from "styled-components";
import TextInput from './TextInput';

function PersonalInfo(props) {

    console.log(props)

    return (
        <StyledDiv>
            <StyledHeader>Personal Information</StyledHeader>
            <FormWrapper>
                <TextInput placeholder="First Name" value={props.values.firstName} onChange={props.callbacks.liftFirstName}/>
                <TextInput placeholder="Last Name" value={props.values.lastName} onChange={props.callbacks.liftLastName}/>
                <TextInput placeholder="(###)-###-####" value={props.values.phone} onChange={props.callbacks.liftPhone}/>
                <TextInput placeholder="youremail@domain.com" value={props.values.email} onChange={props.callbacks.liftEmail}/>
                <TextInput placeholder="1234 Generic Ln, Anytown, USA" value={props.values.address} onChange={props.callbacks.liftAddress}/>
            </FormWrapper>
        </StyledDiv>
    );
};

const StyledHeader = styled.h2`
    margin: 0;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    color: blue;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 50%;
`; 

const StyledDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`; 


export default PersonalInfo;