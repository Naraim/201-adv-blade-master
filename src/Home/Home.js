import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Home() {
    return(

        <div className="container">
            <div className="borderLeft"></div>
            <Header></Header>
            <div className="mainTitle">
                    <h1 className="mainTitle__text">BLADE MASTER</h1>
            </div>
            <Footer></Footer>
        </div>
    );


}

export default Home;