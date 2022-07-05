import React from 'react';
import TaskListPage from '../views/TaskListPage';
import Footer from './Footer';
import Header from './Header';

const Layouts = (props) => {
    return (
        <>
            <Header></Header>
            {props.children}
            <TaskListPage></TaskListPage>
           <Footer></Footer>
        </>
    );
};

export default Layouts;