import React from 'react';

import OpKey from '../OpKey/OpKey';

import './Operators.css'

const Operators = ({click, evaluate}) => {
    return (
        <div className="operators">
            <OpKey id={'/'} value={'/'} click={click}/>
            <OpKey id={'-'} value={'-'} click={click}/>
            <OpKey id={'+'} value={'+'} click={click}/>
            <OpKey id={'='} value={'='} click={evaluate}/>
        </div>
    );
}

export default Operators;