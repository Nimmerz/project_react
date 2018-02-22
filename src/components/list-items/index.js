// @flow

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import './style.styl';
import Sign from '../sign';
import {Link} from 'react-router-dom';

const RoundNumber = (props) => {
    return (
        <span className="sidebar__list--span">{props.number}</span>
    )
};

const menu = [
    {
        id: 1,
        path: '/inbox-content',
        icon: 'move_to_inbox',
        name: 'Inbox',
        quantity: true,
        counter: '3'
    },
    {
        id: 2,
        path: '/sent-content',
        icon: 'send',
        quantity: false,
        name: 'Sent'

    },
    {
        id: 3,
        path: '/spam-content',
        icon: 'report',
        quantity: true,
        name: 'Spam',
        counter: '2'
    },
    {
        id: 4,
        path: '/trash-content',
        icon: 'delete',
        quantity: false,
        name: 'Trash'
    }
];

type Props = {
    location: any,
}

class ListItems extends Component<Props, {}> {

    renderMenuItem: any = (item) => {
        const {location: {pathname} = {}} = this.props;
        const {path, icon, name, quantity, counter} = item;
        return (
            <Link  key={path} to={path} className="sidebar__list--link">
                <li
                    className={pathname === path ? 'sidebar__list--item active' : 'sidebar__list--item'}>
                    <Sign name={icon}/>
                    {name}
                    {quantity && <RoundNumber number={counter}/>}
                </li>
            </Link>
        )
    };

    render() {
        return (
            <div>
                <div>
                    <ul className="sidebar__list">
                        {menu.map(this.renderMenuItem, this)}
                    </ul>
                </div>
            </div>
        );
    }
};

export default withRouter(ListItems);