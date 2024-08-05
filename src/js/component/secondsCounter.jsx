
import React from "react";


const SecondsCounter = () => {
    return (
        <>
            <div className="d-flex justify-content-evenly m-5 p-5 bg-warning" style={{fontSize: "200px"}}>
                <div><i class="fa-solid fa-stopwatch"></i></div>
                <div>6</div>
                <div>5</div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
                <div>1</div>
            </div>
        </>
    );
};

export default SecondsCounter;