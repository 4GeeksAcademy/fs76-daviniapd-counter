import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./styles.css";

const TimeCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
            
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const seconds = counter % 60;
    const minutes = Math.floor(counter / 60) % 60;
    const hours = Math.floor(counter / 3600);

    const one = seconds % 10;
    const two = Math.floor(seconds / 10);
    const three = minutes % 10;
    const four = Math.floor(minutes / 10);
    const five = hours % 10;
    const six = Math.floor(hours / 10);

    console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

    return (
        <>
            <div className="d-flex justify-content-center m-5 bg-warning">
            <div className="row w-100 text-center">
                <div className="col-3 d-flex align-items-center justify-content-center p-2"><i className="fa-solid fa-stopwatch" id="icon"></i></div>

                    <div className="col-3">
                    <div className="text">hours</div> 
                        <div className="numbers">{six % 10}{five % 10}</div>
                    </div>
                    <div className="col-3">
                    <div className="text">minutes</div> 
                        <div className="numbers">{four % 10}{three % 10}</div>
                    </div>
                    <div className="col-3">
                        <div className="text">seconds</div> 
                        <div className="numbers">{two % 10}{one % 10}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

TimeCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number
};

export default TimeCounter;