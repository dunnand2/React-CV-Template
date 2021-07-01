import React, { useState } from 'react';
import styled from "styled-components";

function TextInput(props){
    const [textValue, setTextValue] = useState(props.value);
    const [placeholder, setPlaceholder] = useState(props.placeholder)

    const onChange = (event) => {
        setTextValue(event.target.value);
    };

    return (
        <StyledTextInput type="text" placeholder={placeholder} value={textValue} onChange={onChange}/>
    );

};

const StyledTextInput = styled.input`
    width: 50%;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
`; 


export default TextInput;