// @flow

import React, {Component} from 'react';
import Sign from '../../sign';
import '../../routes/style.styl';
import {connect} from 'react-redux';
import { fetchTrashStatistic, getTrashUsageStatistics, removeTrashUsageStatistics, removeTrashStatistic } from './actions'




type Props = {
    type: string,
}

type State = {
    read: boolean,
};


class Buttons extends Component<Props, State> {

    state = {
        read: false
    };

    handleClick = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <button className={`btn-hover ${this.props.type}`} onClick={this.handleClick}>
                {this.props.type === "btn-spam" &&  <Sign name="report"/>}
                {this.props.type === "btn-notspam" && <Sign name="move_to_inbox"/>}
                {this.props.type === "btn-restore" && <Sign name="reply"/>}
                {this.props.type === "btn-trash" && <Sign name="delete"/>}
            </button>
        );
    }
}


type PropsList = {
    isOpen: boolean
}

class ListItem extends Component<PropsList, State> {

    state = {
        read: false
    };

    handleOpenClick = (event) => {
        event.preventDefault();
    };



    handleOnRemove = () => {
        this.props.removeTrashUsageStatistics();
    };


    render() {
        return (
            <div className={this.props.isOpen ? 'message message-open' : 'message'} onClick={this.handleOpenClick}>
                <p className="message-open__paragraph">
                    {this.props.mess.subject}
                </p>
                {this.props.isOpen && <EmailData mess={this.props.mess}/>}
                <p className="message-open__paragraph-sec">
                    {this.props.mess.messageBody}
                </p>

                <div className="message-controls">
                    <Buttons type="btn-restore"/>
                    <Buttons onClick={this.handleOnRemove} type="btn-trash"/>
                </div>
            </div>
        );
    }

}


type PropsMain = {
    isOpen: boolean,
    current: {}
}

type StateMain = {
    openMessage: any,
};


class Trashcontent extends Component<PropsMain, StateMain> {

    state = {
        openMessage: null
    };

    componentDidMount(){
        this.props.getTrashUsageStatistics();
    }

    accordionClick = (TrashcontentId: string) => () => {

        if (this.state.openMessage === TrashcontentId) {
            this.setState({
                openMessage: null
            });
        } else {
            this.setState({
                openMessage: TrashcontentId
            });
        }
    };

    render() {
        const {current} = this.props;
        const listItems = this.props.trashContent.data.map(item =>
            <li className="main__content--list-item list-item-bold">
                <a key={item._id.$oid}  onClick={this.accordionClick(item._id.$oid)} className="main__content--list-link" href="#">
                    <ListItem mess={item} isOpen={this.state.openMessage === item._id.$oid} current={current} />
                </a>
            </li>
        );
        return (
            <div className="main__content--elements">
                <p className="main__content--paragraph">
                    Today
                </p>
                <ul className="main__content--list">
                    {listItems}
                </ul>
            </div>
        )
    }

};


class EmailData extends Component<{}> {
    render() {
        return (
            <div className="message__recipients recipient-fields">
                <div className="recipient-fields--form">
                    <label className="recipient-fields--label" htmlFor="1">From</label>
                    <input readOnly={true} className="recipient-fields--input" id="1" name='to' type="text"
                           placeholder={this.props.mess.to} />
                </div>
                <div className="form-group recipient-fields--form">
                    <label className="recipient-fields--label" htmlFor="2">Cc</label>
                    <input readOnly={true} className="recipient-fields--input-сс" id="2" name='cc' type="text"
                           placeholder={this.props.mess.cc} />
                </div>
                <div className="form-group recipient-fields--form">
                    <label className="recipient-fields--label" htmlFor="3">Bcc</label>
                    <input readOnly={true} className="recipient-fields--input-bcc" id="3" name='bcc' type="text"
                           placeholder={this.props.mess.bcc} />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    trashContent: state.trashContent,
    removeTrashContent: state.removeTrashContent
} ),{ fetchTrashStatistic, getTrashUsageStatistics,
     removeTrashStatistic, removeTrashUsageStatistics})
(Trashcontent);
