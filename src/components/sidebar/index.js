// @flow

import React from 'react';
import './style.styl';
import Logo from '../logo';
import ListItems from '../list-items';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo/>
            <nav>
                <ListItems/>
            </nav>
        </div>
    )
};


export default Sidebar;