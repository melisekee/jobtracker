import React from 'react';
import '../../styles/DashboardCard.scss';

function DashboardCardApply(props) {
return (
        <div className="DashboardCard__ContentApply">
            <a href={props.jobApplyLink}>Apply Now?</a>
        </div>
    );
}

export default DashboardCardApply;    
