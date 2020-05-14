import React from 'react';
import {Link} from 'react-router-dom';

function ButtonGallery(props) {

    function handleDelete() {
        let listCopy = props.list.slice();
        let deleteIndex;
        listCopy.forEach((e, index) => {
            if(e.id === props.id) deleteIndex = index;
        });
        listCopy.splice(deleteIndex, 1);
        props.setList(listCopy);
    }   

    function handleEdit() {
        props.setShape(props.shape);
        props.setBladeColor(props.bladeColor);
        props.setName(props.name);
        props.setDecoration(props.decoration);
        props.setHilt(props.hilt);
        props.setPower(props.power);
    }

    return(
        <div className="button__gallery">
                <div className="hover">
                    <span>{props.name}</span>
                    <Link className="social-link" to="/create/customize/blade"><img alt="Edit" src="/assets/buttons/edit.svg" onClick={handleEdit}/></Link>
                        
                    <Link className="social-link" to="/Gallery"><img alt="View" src="/assets/buttons/photo.svg"/></Link> 
                    
                    <div className="social-link"><img alt="Delete" src="/assets/buttons/delete.svg" onClick={handleDelete}/></div>
                </div>
            </div>
    );

}

export default ButtonGallery;
