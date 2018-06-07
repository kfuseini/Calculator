import React from 'react';

import './Clear.css';

const Clear = ({ click }) => {
    return (
        <div className="clear" onClick={click}>
            clear
        </div>
    );
}

export default Clear;