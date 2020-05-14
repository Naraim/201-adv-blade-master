import React from 'react';
import Visualization from '../Visualization/Visualization';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';

function Name(props) {

    function handleName(event) {
        if(event.target.value.length < 18) props.setName(event.target.value);
    }
    
    function handleFinish() {
        const id = uuid();
        const finishedSword = {
            id: id,
            name: props.name,
            shape: props.shape,
            bladeColor: props.bladeColor,
            hilt: props.hilt,
            power: props.power,
            decoration: props.decoration,
        };

        props.setList(
            [
                ...props.list,
                finishedSword
            ]
        );
    }
  
    return( 
        <div className="contName">
            <h2 className="mainTitle__text mainTitle__text--create">3. Name</h2>
            <div className="container container--name">
                <input className="inputName" type="text" placeholder="Insert a name" onChange={handleName} value={props.name}/>
                <Visualization shape={props.shape} decoration={props.decoration} bladeColor={props.bladeColor} hilt={props.hilt} power={props.power} />
            </div>
            <Link to="/gallery" className="next next--create" onClick={handleFinish}>Create</Link>
        </div>
    );

}

export default Name;