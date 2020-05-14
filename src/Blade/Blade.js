import React from 'react';

function Blade(props) {

    let btn1, btn2, btn3, btn4;
    

    if(props.shape == 1) {
        btn1 = '/assets/img/Group 53.svg';
        btn2 =  '/assets/img/Group 54.svg';
        btn3 =  '/assets/img/Group 55.svg';
        btn4 =  '/assets/img/Group 56.svg';     
    } else {
        btn1 = '/assets/img/Group 77.svg';
        btn2 =  '/assets/img/Group 78.svg';
        btn3 =  '/assets/img/Group 79.svg';
        btn4 =  '/assets/img/Group 80.svg'; 
    }

    function handleDecoration(event) {
            props.setDecoration(event.target.getAttribute('data-value'));
    }

    function handleColor(event) {
        props.setBladeColor(event.target.getAttribute('data-value'));
    }

    return( 
       <div className="blade">
                    <div className="types">
                        <div className="types__one"><img src={btn1} alt="1" data-value={1} onClick={handleDecoration}/></div>
                        <div className="types__one"><img src={btn2} alt="2" data-value={2} onClick={handleDecoration}/></div>
                    </div>
                    <div className="types">
                        <div className="types__one"><img src={btn3} alt="3" data-value={3} onClick={handleDecoration}/></div>
                        <div className="types__one"><img src={btn4} alt="4" data-value={4} onClick={handleDecoration}/></div>
                    </div>
                    <div className="colors">
                        <p className="colors__text">Color</p>
                        <div className="colors__option">
                            <div className="colors__button colors__button--pink" data-value={1} onClick={handleColor}></div>
                            <div className="colors__button colors__button--yellow" data-value={2} onClick={handleColor}></div>
                            <div className="colors__button colors__button--blue" data-value={3} onClick={handleColor}></div>
                            <div className="colors__button colors__button--purple" data-value={4} onClick={handleColor}></div>
                        </div>
                    </div> 
        </div> 
    );

}

export default Blade;