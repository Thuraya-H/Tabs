import react, { useState } from 'react';
    
    
const Display = props => {
    return (
        <div className="">
            <div className="border border-secondary m-3 p-2 rounded" style={{height:150, width:500}}>
                <p>{props.msg}</p>
            </div>
        </div>
    );
}
    
export default Display;