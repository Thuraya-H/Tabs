import react, { useState } from 'react';
    
    
const Taps = ({taps, setTaps, index, setIndex}) => {

    const onClickHandler = (e, value) => {
        e.preventDefault();
        setIndex(value);
    }

    return ( taps.map( (item, i) => {
        return <button className= {item.content === index ? "m-3 px-4 btn btn-dark" : "m-3 px-4 btn btn-outline-secondary" }
        onClick = {(e) => onClickHandler(e, item.content) }> { item.lable } </button>
    }
    ));
}
    
export default Taps;