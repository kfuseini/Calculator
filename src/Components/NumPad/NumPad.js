import React from 'react';

import NumKey from '../NumKey/NumKey';
import './NumPad.css'

const NumPad = ({click}) => {
    return (
        <div className="numpad">
            <NumKey id={9} value={9} click={click}/>
            <NumKey id={8} value={8} click={click}/>
            <NumKey id={7} value={7} click={click}/>
            <NumKey id={6} value={6} click={click}/>
            <NumKey id={5} value={5} click={click}/>
            <NumKey id={4} value={4} click={click}/>
            <NumKey id={3} value={3} click={click}/>
            <NumKey id={2} value={2} click={click}/>
            <NumKey id={1} value={1} click={click}/>

            {/* <div className="col2">
                <NumKey value={8}/>
                <NumKey value={5}/>
                <NumKey value={2}/>
            </div>
            <div className="col3">
                <NumKey value={9}/>
                <NumKey value={6}/>
                <NumKey value={3}/>
            </div> */}
        </div>
    );
}

export default NumPad;