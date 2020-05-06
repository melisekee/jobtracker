import React from 'react';
import '../styles/Sidebar.scss';

function SidebarNavItem(props) {
return (
        <div className={"SidebarNavItem " + props.additionalClasses}>
            <div className="SidebarNavItem__Content">
                <props.icon /> <span className="SidebarNavItem_ContentText">{props.text}</span>
            </div>    
        </div>       
    );
}

export default SidebarNavItem;    
