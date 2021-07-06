import React, { useState } from 'react';
import styled from "styled-components";

function TextInput(props){

    

    const handleChange = (event) => {
        console.log(props.onChange)
        props.onChange(event.target.value);
    };

    return (
        <StyledTextInput type="text" placeholder={props.placeholder} value={props.value} onChange={handleChange}/>
    );

};

const StyledTextInput = styled.input`
    width: 50%;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
`; 


export default TextInput;