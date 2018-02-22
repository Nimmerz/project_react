// @flow

import React, {Component} from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import Show from '../modal-button'
import './style.styl';


type Props = {
    children: any,
};

class Layout extends Component<Props> {
    render() {
        return (
            <div className="main__layout">
                <Sidebar />
                <div className="main__right-block">
                    <div className="main__header">
                        <Header/>
                    </div>
                    <div className="main__content">
                        {this.props.children}
                        <Show />
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;