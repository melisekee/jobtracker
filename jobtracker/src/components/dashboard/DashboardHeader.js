import React from 'react';
import '../../styles/Dashboard.scss';

function DashboardHeader(props) {

return (
    <div className="DashboardHeader">
        Welcome back {props.username}!
    </div>
    );
}

export default DashboardHeader;    
