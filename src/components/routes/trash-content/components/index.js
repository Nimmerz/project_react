import React, {Component} from 'react';
import Sign from '../../../sign';
import '../../../routes/style.styl';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom'
import {removeTrashUsageStatistics, postData} from '../actions'

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
            <button className={`btn-hover ${this.props.type}`} onClick={this.props.onClick}>
                {this.props.type === "btn-spam" && <Sign name="report"/>}
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
    constructor(props) {
        super(props);
        this.path = `trash/${this.props.mess._id.$oid}`;
    }

    state = {
        read: false
    };


    handleOpenClick = (event) => {
        event.preventDefault();
    };


    handleMoveToInbox = () => {
        this.props.postTrashContent('inbox-content',  this.props.mess._id.$oid);
        this.props.removeTrashUsageStatistics(this.path);
    };


    handleMoveToSpam = (pathTo) => {
        props.addTo('messages-spam', this.props.mess);
        props.remove(path);
    };


    handleOnRemove = () => {
        const { location : { pathname = '' } = {} } = this.props;
        if (pathname.indexOf('trash') === -1) {
            // this.props.postTrashContent('trash-content', {...this.props.mess, prevSection: current});
            this.props.removeTrashUsageStatistics(this.path);
        } else {
            if (confirm('Delete message permanently?')) {
                this.props.removeTrashUsageStatistics(this.path);
            }
        }
    };

    handleMoveBack = () => {
        props.addTo(`messages-${message.prevSection}`, message);
        props.remove(path);
    };


    handleRead = () => {
        !message.isRead && props.read(path, {...message, isRead: 'true'});
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
                    <Buttons onClick={this.handleMoveToInbox} type="btn-restore"/>
                    <Buttons onClick={this.handleOnRemove} type="btn-trash"/>
                </div>
            </div>
        );
    }

}


class EmailData extends Component<{}> {
    render() {
        return (
            <div className="message__recipients recipient-fields">
                <div className="recipient-fields--form">
                    <label className="recipient-fields--label" htmlFor="1">From</label>
                    <input readOnly={true} className="recipient-fields--input" id="1" name='to' type="text"
                           placeholder={this.props.mess.to}/>
                </div>
                <div className="form-group recipient-fields--form">
                    <label className="recipient-fields--label" htmlFor="2">Cc</label>
                    <input readOnly={true} className="recipient-fields--input-сс" id="2" name='cc' type="text"
                           placeholder={this.props.mess.cc}/>
                </div>
                <div className="form-group recipient-fields--form">
                    <label className="recipient-fields--label" htmlFor="3">Bcc</label>
                    <input readOnly={true} className="recipient-fields--input-bcc" id="3" name='bcc' type="text"
                           placeholder={this.props.mess.bcc}/>
                </div>
            </div>
        );
    }
}

export default compose(
    connect(state => ({
        removeTrashContent: state.removeTrashContent,
        postTrashContent: state.postTrashContent
    } ), {removeTrashUsageStatistics, postData}),
    withRouter
)(ListItem)
;