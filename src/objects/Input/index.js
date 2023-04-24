import React from 'react';

const Input = ({id="", value="", type="text"}) => (
    <input id={id} className="input" type={type} value={value} />
);

export default Input;