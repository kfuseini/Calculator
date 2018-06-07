import React from 'react';

import './Display.css'

const Display = ({display, output}) => {
    return (
        <div className="display">
            { display }
            <br/>
            { output }
        </div>
    );
}

export default Display;