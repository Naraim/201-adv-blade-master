import React from 'react';
import Step from '../Step/Step';
import Visualization from '../Visualization/Visualization';
import Blade from '../Blade/Blade';
import Hilt from '../Hilt/Hilt';
import { Route } from 'react-router-dom';
import Power from '../Power/Power';

function Customize(props) {

    

    return( 
        <div>
            <h2 className="mainTitle__text mainTitle__text--create">2. Customize</h2>
            <div className="container container--create">
                <Visualization shape={props.shape} decoration={props.decoration} bladeColor={props.bladeColor} hilt={props.hilt} power={props.power} ></Visualization>
                <div className="options"> 
                    <Step></Step>
                    <div className="options__select">
                        <Route path="/create/customize/blade" render={() => <Blade shape={props.shape} setDecoration={props.setDecoration} setBladeColor={props.setBladeColor}/>} />
                         <Route path="/create/customize/hilt" render={() => <Hilt shape={props.shape} setHilt={props.setHilt} />}/>
                        <Route path="/create/customize/power" render={() => <Power setPower={props.setPower} />}/>
                    </div>
                </div>
                
            </div>
        </div>
        
    );

}

export default Customize;