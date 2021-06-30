import React, { useState } from 'react';
import styled from "styled-components";

function DateInput(props){
    const [dateValue, setDateValue] = useState("");
    const [placeholder, setPlaceholder] = useState("")

    const onChange = (event) => {
        setDateValue(event.target.value);
    };

    return (
        <input type="date" placeholder={placeholder} value={dateValue} onChange={onChange}/>
    );

};



export default DateInput;