import React from 'react';

function Hilt(props) {

    let btn1, btn2, btn3, btn4;

    if(props.shape == 1) {
        btn1 = '/assets/img/Group 67.png';
        btn2 =  '/assets/img/Group 68.png';
        btn3 =  '/assets/img/Group 69.png';
        btn4 =  '/assets/img/Group 70.png';     
    } else {
        btn1 = '/assets/img/Group 86.svg';
        btn2 =  '/assets/img/Group 87.svg';
        btn3 =  '/assets/img/Group 88.svg';
        btn4 =  '/assets/img/Group 89.svg'; 
    }

    function handleHilt(event) {
        props.setHilt(event.target.getAttribute('data-value'));
    }

    return( 
        <div className="hilt">
        <div className="types">
                <div className="types__one types__one--hilt"><img src={btn1} alt="1" data-value={1} onClick={handleHilt}/></div>
                <div className="types__one types__one--hilt"><img src={btn2} alt="2" data-value={2} onClick={handleHilt}/></div>
            </div>
            <div className="types">
                <div className="types__one types__one--hilt"><img src={btn3} alt="3" data-value={3} onClick={handleHilt}/></div>
                <div className="types__one types__one--hilt"><img src={btn4} alt="4" data-value={4} onClick={handleHilt}/></div>
            </div>
    </div>
    );

}

export default Hilt;