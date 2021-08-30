import React from 'react';
import './button.css'

const Button = ({goBack}) => {
    return (
        <div onClick={goBack} className="btn from-top">back</div>
    );
};

export default Button;