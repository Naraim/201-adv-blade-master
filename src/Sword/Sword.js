import React from 'react';
import { Link } from 'react-router-dom';


function Sword(props){
    
    function handleShape(event) {
        props.setShape(event.target.getAttribute('data-value'));
    }

    return(
        <div>
            <h2 className="mainTitle__text mainTitle__text--create">1. Select a sword</h2>
            
            <div className="swords">
                <Link className="swords__sword" to="/create/customize/blade" ><img src="/assets/img/sword1.png" alt="Sword1" data-value={1}  onClick={handleShape}/></Link> 
                <Link className="swords__sword" to="/create/customize/blade"  ><img src="/assets/img/sword2.png" alt="Sword2" data-value={2} onClick={handleShape}/></Link>
            </div>
        </div>
        
    );

}



export default Sword;