import React from 'react';

import './NumKey.css'

const NumKey = ({id, value, click}) => {
    return (
        <div id={id} className="numkey" onClick={click}>
            {value}
        </div>
    );
}

export default NumKey;