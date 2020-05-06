import React from 'react';
import '../../styles/DashboardCard.scss';
import DashboardCardApply from './DashboardCardApply';
import DashboardCardUpdateStatus from './DashboardCardUpdateStatus';

function DashboardCard(props) {
return (
    <div className="DashboardCard">
        <div className="DashboardCard__Header">
            {props.company}
        </div>
        <div className="DashboardCard__Content">
            <div className="DashboardCard__ContentTitle">
                {props.jobTitle}
            </div>
            {
                {
                    'saved': <DashboardCardApply jobApplyLink={props.jobApplyLink}/>,
                    'applied': <DashboardCardUpdateStatus />
                }[props.status]
            }
            
        </div>
    </div>
    );
}

export default DashboardCard;    
