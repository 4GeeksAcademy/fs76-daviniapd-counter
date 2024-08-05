import React from "react";
import PropTypes from 'prop-types';


const SecondsCounter = (props) => {
    return (
        <>
            <div className="d-flex justify-content-evenly m-5 p-5 bg-warning" style={{fontSize: "200px"}}>
                <div><i className="fa-solid fa-stopwatch"></i></div>
                <div>{props.digitSix}</div>
                <div>{props.digitFive}</div>
                <div>{props.digitFour}</div>
                <div>{props.digitThree}</div>
                <div>{props.digitTwo}</div>
                <div>{props.digitOne}</div>
            </div>
        </>
    );
};

SecondsCounter.prototypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number
};




export default SecondsCounter;