import React from 'react';
import '../../styles/Dashboard.scss';
import { FaHome, FaUser, FaSignInAlt ,FaSignOutAlt} from 'react-icons/fa';
import DashboardHeader from './DashboardHeader'
import DashboardTitle from './DashboardTitle'
import DashboardCardContainer from './DashboardCardContainer'

function Dashboard(props) {
const isLoggedIn = true;
const jobsSaved = [
    {
        company: "Facebook",
        jobTitle: "Technical Consultant",
        jobApplyLink: "http://facebook.com",
        currentStatus: "saved"
    },
    {
        company: "Twitter",
        jobTitle: "Developer Superstar",
        jobApplyLink: "http://twitter.com",
        currentStatus: "saved"
    }
];
const jobsApplied = [
    {
        company: "Google",
        jobTitle: "Full Stack Software Developer",
        jobApplyLink: "http://google.com",
        currentStatus: "applied"
    },
    {
        company: "LinkedIn",
        jobTitle: "Software Engineer",
        jobApplyLink: "http://linkedin.com",
        currentStatus: "applied"
    }
];
return (
    <div className="Dashboard">
        <DashboardHeader username="Melise"/>
        <DashboardTitle text="Jobs Saved" status="saved" />
        <DashboardCardContainer cardsList={jobsSaved} status="saved"/>
        <DashboardTitle text="Jobs Applied" status="applied" />
        <DashboardCardContainer cardsList={jobsApplied} status="applied"/>
        <DashboardTitle text="Jobs Applied Stage 1" status="stage-1" />
        <DashboardTitle text="Jobs Unsuccessful" status="unsuccessful" />



    </div>
    );
}

export default Dashboard;    
