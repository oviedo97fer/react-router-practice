import React from 'react';
import {Link, withRouter} from 'react-router-dom'


const Nav = () =>{

    return(
        <React.Fragment>
            <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/settings'>Settings</Link>
                </li>
                <li>
                    <Link to='/reports'>Reports</Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Nav;