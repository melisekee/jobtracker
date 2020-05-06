import React from 'react';
import '../../styles/Dashboard.scss';
import DashboardCard from './DashboardCard'

function DashboardCardContainer(props) {

return (
    <div className="DashboardCardContainer">
        {
            props.cardsList.map((card, index) => (
                <DashboardCard company={card.company} jobTitle={card.jobTitle} jobApplyLink={card.jobApplyLink} status={props.status}/>
            ))
        }
        </div>
    );
}

export default DashboardCardContainer;    
