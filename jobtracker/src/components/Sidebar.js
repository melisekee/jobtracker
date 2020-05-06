import React from 'react';
import '../styles/Sidebar.scss';
import Menu from './Menu';

function Sidebar(props) {
const isLoggedIn = true;

return (
    <div className="Sidebar">
        <div className="Sidebar__Logo">
            <span className="bold">Job</span>Tracker
        </div>
        <div className="Sidebar__Menu">
            <Menu isLoggedIn={isLoggedIn}/>
        </div>
    </div>
    );
}

export default Sidebar;    
