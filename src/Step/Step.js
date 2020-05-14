import React from 'react';
import { Link } from 'react-router-dom';

function Step() {
    return( 
        <div className="step">
            <Link to="/create/customize/blade" className="button button__blade">Blade</Link>
            <Link to="/create/customize/hilt" className="button button__hilt">Hilt</Link>
            <Link to="/create/customize/power" className="button button__power">Power</Link>
         </div>
    );

}

export default Step;
            