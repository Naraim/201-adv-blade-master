import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ButtonGallery from '../ButtonGallery/ButtonGallery';
import Visualization from '../Visualization/Visualization';
import Sword from '../Sword/Sword';

function Gallery(props) {

    const slotsLeft = 4 - props.list.length;

    let emptySlots = [];
    for(let i = 0; i < slotsLeft; i++) {
        emptySlots.push('');
    }

    return(
        <div className=" container container--gallery">
            <Header></Header>
                <h2 className="mainTitle__text mainTitle__text--gallery">Gallery</h2>
                <div className="gallery"> 

                    {props.list.map((sword) => (
                    <div className="visualization--vertical" key={sword.id}>
                        <Visualization   
                        shape={sword.shape} decoration={sword.decoration}
                        bladeColor={sword.bladeColor} hilt={sword.hilt}
                        power={sword.power}/>

                        <ButtonGallery list={props.list} setList={props.setList}
                        shape={sword.shape} setShape={props.setShape}
                        decoration={sword.decoration} setDecoration={props.setDecoration}
                        bladeColor={sword.bladeColor} setBladeColor={props.setBladeColor}
                        name={sword.name} setName={props.setName}
                        hilt={sword.hilt} setHilt={props.setHilt}
                        power={sword.power} setPower={props.setPower}/>
                    </div>))}

                    {emptySlots.map((e,index) => (
                        <div key={index} className="gallery__sword gallery__sword--empty">
                    
                        </div>
                    ))}             
                </div>
                <Footer></Footer>
        </div>
    );
}

export default Gallery;