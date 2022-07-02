import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layouts = (props) => {
    return (
        <>
            <Header></Header>
            {props.children}
           <Footer></Footer>
        </>
    );
};

export default Layouts;