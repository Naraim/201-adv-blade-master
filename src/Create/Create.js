import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sword from '../Sword/Sword';
import { Route } from 'react-router-dom';
import Customize from '../Customize/Customize';
import Name from '../Name/Name';


function Create(props) {

    return(
            <div className=" container container--gallery">
                <Header></Header>
                
                <Route path="/create" exact render={() => <Sword 
                setShape={props.setShape}/>}/>
                
                <Route path="/create/customize" render={() => <Customize 
                shape={props.shape} decoration={props.decoration} setDecoration={props.setDecoration} bladeColor={props.bladeColor} setBladeColor={props.setBladeColor} hilt={props.hilt} setHilt={props.setHilt} power={props.power} setPower={props.setPower} />}/>
               
                <Route path="/create/name" render={() => <Name 
                shape={props.shape} decoration={props.decoration} bladeColor={props.bladeColor} power={props.power} setName={props.setName} hilt={props.hilt} name={props.name}
                list={props.list} setList={props.setList}/>}/>     

                <Footer></Footer>
            </div>

    );

}

export default Create;