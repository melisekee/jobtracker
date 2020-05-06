import React from 'react';
import { FaHome, FaUser, FaSignInAlt ,FaSignOutAlt} from 'react-icons/fa';
import SidebarNavItem from './SidebarNavItem';
import { Link, withRouter } from "react-router-dom";
 
const items = [{
    path: '/',
    item: <SidebarNavItem icon={FaHome} text="Dashboard" additionalClasses="selected" />
}, {
    path: '/profile',
    item: <SidebarNavItem icon={FaUser} text="Profile" additionalClasses="" />
}];

// {props.isLoggedIn ?
//     <SidebarNavItem icon={FaSignOutAlt} text="Sign Out" additionalClasses="" />       
//     :
//     <SidebarNavItem icon={FaSignInAlt} text="Sign In" additionalClasses="" />         
//     }

function Menu(props) {
    function handleClick(path) {
        props.history.push(path);
    }

    return (
        <ul className="menu">
            {items.map(item => (
                <li
                    key={item.path}
                    onClick={handleClick.bind(null, item.path)}
                    className={
                        props.location.pathname === item.path
                            ? 'menu__item menu__item--active'
                            : 'menu__item'
                    }
                >
                    <Link to={item.path}>{item.item}</Link>
                </li>
            ))}
        </ul>
    );
}


export default withRouter(Menu);
