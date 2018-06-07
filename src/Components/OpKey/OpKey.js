import React from 'react';

import './OpKey.css'

const OpKey = ({id, value, click}) => {
    return (
        <div id={id} className="opkey" onClick={click}>
            {value}
        </div>
    );
}

export default OpKey;