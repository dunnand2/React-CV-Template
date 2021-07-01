import React, { useState } from 'react';
import styled from "styled-components";

function DateInput(props){
    const [dateValue, setDateValue] = useState("");
    const [placeholder, setPlaceholder] = useState(props.placeholder)

    const onChange = (event) => {
        setDateValue(event.target.value);
    };

    const onFocus = (event) => {
        event.target.type = 'date';
    };

    const onBlur= (event) => {
        event.target.type = 'text';
    };

    return (
        <StyledDateInput type="text" placeholder={placeholder} value={dateValue} onChange={onChange} onFocus={onFocus} onblur={onBlur}/>
    );

};

const StyledDateInput = styled.input`
    width: 50%;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
`; 

export default DateInput;