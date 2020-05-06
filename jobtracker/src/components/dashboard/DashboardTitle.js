import React from 'react';
import '../../styles/Dashboard.scss';
import {FaPlusCircle} from 'react-icons/fa';

function DashboardTitle(props) {

return (
    <div className="DashboardTitle">
        <div className="DashBoardTitle__Content">
        {props.text}
        <div className="DashboardTitle__Add"><FaPlusCircle /></div>
        </div>
        <hr/>
    </div>
    );
}

export default DashboardTitle;    