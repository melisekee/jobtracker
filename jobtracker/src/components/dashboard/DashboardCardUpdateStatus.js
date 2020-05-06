import React from 'react';
import '../../styles/DashboardCard.scss';
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa';


function DashboardCardUpdateStatus(props) {
return (
        <div className="DashboardCard__ContentUpdateStatus">
            <div className="DashboardCard__ContentUpdateStatusTitle">Update Status?</div>
            <div className="DashboardCard__ContentUpdateStatusIconContainer">
                <FaCheckCircle className="fa-check"/>
                <FaTimesCircle className="fa-times" />
            </div>
        </div>
    );
}

export default DashboardCardUpdateStatus;    
