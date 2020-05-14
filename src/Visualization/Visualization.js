import React from 'react';

function Visualization(props) {

    let swordBase = '/assets/img/';
    let swordDecoration = '/assets/img/';
    let swordColor = '/assets/img/';
    let swordHilt = '/assets/img/';
    let swordPower = '/assets/img/shadow-';

   
    if(props.shape == 1) {
        swordBase += 'sword1.png';

        //Decoration Blade

        if(props.decoration == 1){
            swordDecoration += 'blade1-one.png';
        }else if (props.decoration == 2){
            swordDecoration += 'blade1-two.png';
        }else if (props.decoration == 3){
            swordDecoration += 'blade1-three.png';
        }else{
            swordDecoration += 'blade1-four.png';
        }

        // Color

        if(props.bladeColor == 1){
            swordColor += 'blade1-pink.png';
        }else if(props.bladeColor == 2){
            swordColor += 'blade1-yellow.png';
        }else if(props.bladeColor == 3){
            swordColor += 'blade1-blue.png';
        }else{
            swordColor += 'blade1-purple.png';
        }

        // Hilt

        if(props.hilt == 1){
            swordHilt += 'blade1-hilt1.png'
        }else if(props.hilt == 2){
            swordHilt += 'blade1-hilt2.png';
        }else if(props.hilt == 3){
            swordHilt += 'blade1-hilt3.png';
        }else if (props.hilt == 4){
            swordHilt += 'blade1-hilt4.png';
        }else{

        }

        // Power

        if(props.power == 1){
            swordPower += 'red.png'
        }else if(props.power == 2){
            swordPower += 'blue.png';
        }else if(props.power == 3){
            swordPower += 'green.png';
        }else if (props.power == 4){
            swordPower += 'white.png';
        }else{

        }



    } else {
        swordBase += 'sword2.png';

        //Decoration Blade

        if(props.decoration == 1){
            swordDecoration += 'blade2-one.png';
        }else if (props.decoration == 2){
            swordDecoration += 'blade2-two.png';
        }else if (props.decoration == 3){
            swordDecoration += 'blade2-three.png';
        }else{
            swordDecoration += 'blade2-four.png';
        }
        
        
        // Color

        if(props.bladeColor == 1){
            swordColor += 'blade2-pink.png';
        }else if(props.bladeColor == 2){
            swordColor += 'blade2-yellow.png';
        }else if(props.bladeColor == 3){
            swordColor += 'blade2-blue.png';
        }else{
            swordColor += 'blade2-purple.png';
        }

        // Hilt

        if(props.hilt == 1){
            swordHilt += 'blade2-hilt1.png'
        }else if(props.hilt == 2){
            swordHilt += 'blade2-hilt2.png';
        }else if(props.hilt == 3){
            swordHilt += 'blade2-hilt4.png';
        }else if (props.hilt == 4){
            swordHilt += 'blade2-hilt3.png';
        }else{

        }

        // Power

        if(props.power == 1){
            swordPower += 'red.png'
        }else if(props.power == 2){
            swordPower += 'blue.png';
        }else if(props.power == 3){
            swordPower += 'green.png';
        }else if (props.power == 4){
            swordPower += 'white.png';
        }else{

        }

    }


    return( 
        <div className="visualization">
            <img className="visualization__item visualization__item--shadow" src={swordPower} alt=""/>
            <img className="visualization__item visualization__item--color" src={swordColor} alt=""/>
            <img className="visualization__item visualization__item--blade" src={swordDecoration} alt=""/>
            <img className="visualization__item visualization__item--blade" src={swordHilt} alt=""/>
            
        </div>
    );

}

export default Visualization;
            