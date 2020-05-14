import React from 'react';
import { Link } from 'react-router-dom';

function Power(props) {

    function handlePower(event){
        props.setPower(event.target.getAttribute('data-value'));
    }


    return( 
    <div className="power">
        <div className="types">


                <img src="/assets/img/fire.png" alt="fire" className="types__one types__one--power" data-value={1} 
                onClick={handlePower} />
                <img src="/assets/img/water.png" alt="water" className="types__one types__one--power" data-value={2}
                onClick={handlePower}/>
                <img src="/assets/img/ground.png" alt="ground" className="types__one types__one--power" data-value={3}
                onClick={handlePower}/>
                <img src="/assets/img/air.png" alt="air" className="types__one types__one--power" data-value={4}
                onClick={handlePower}/>

        </div>
        <Link to="/create/name" className="next">Next Step</Link>
    </div> 
    );

}

export default Power;