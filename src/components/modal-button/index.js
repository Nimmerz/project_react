// @flow

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.styl'
import Sign from '../sign'
import {connect} from 'react-redux';
import {postfetchStatistic, postUsageStatistics} from './actions'


type Props = {
    children: any,
};

type State = {
    showModal: boolean
};


const modal: any = document.getElementById('modal-root');

class Modal extends Component<Props, State> {
    el: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modal.appendChild(this.el);
    }

    componentWillUnmount() {
        modal.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}


class Show extends Component<{}, State> {
    handleShow: Object;
    handleHide: Object;

    state = {
        subject: "",
        messageBody: "",
        isRead: "",
        to: "",
        cc: "",
        bcc: ""
    };

    handleTextChange = (event) => {
        const input = event.target.name;
        this.setState({
            subject: input === "subject" ? event.target.value : this.state.subject,
            messageBody: input === "messageBody" ? event.target.value : this.state.body,
            to: input === "to" ? event.target.value : this.state.to,
            cc: input === "cc" ? event.target.value : this.state.cc,
            bcc: input === "bcc" ? event.target.value : this.state.bcc,
        });
    };


    handleShow = () => () => {
        this.setState({showModal: true});
    };



    handleonSubmit = (event) => {
        event.preventDefault();
        this.props.postUsageStatistics(this.state);
        this.setState({showModal: false});
    };


    handleHide = () => () => {
        this.setState({showModal: false});
    };

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className="main__content--modal">
                        <div className="main__content--modal-main">
                            <p className="main__content--modal-content">New Email</p>
                            <a className="main__content--modal-close" href="#" onClick={this.handleHide()}><Sign
                                name="close"/></a>
                        </div>
                        <form onSubmit={this.handleonSubmit}>
                            <div className="main__content--modal-input">
                                <label htmlFor="Email" className="main__content--label-first">To</label>
                                <input required={true} onChange={this.handleTextChange} name="to" className="main__content--input-first" type="email" id="Email"
                                       placeholder="to@email.me"/>
                            </div>
                            <div className="main__content--modal-input">
                                <label htmlFor="Emailsec" className="main__content--label-first">Cc</label>
                                <input className="main__content--input-first" onChange={this.handleTextChange} name="cc" type="email" id="Emailsec"
                                       placeholder="cc@email.me"/>
                            </div>
                            <div className="main__content--modal-input modal_border">
                                <label htmlFor="Emailthird" className="main__content--label-first">Bcc</label>
                                <input className="main__content--input-first-bcc" onChange={this.handleTextChange} name="bcc" type="email" id="Emailthird"
                                       placeholder="bcc@email.me"/>
                            </div>
                            <div className="main__content--modal-input-text">
                                <input className="main__content--modal-subject" onChange={this.handleTextChange} name="subject" type="text" placeholder="Subject"/>
                            </div>
                            <div className="main__content--modal-input-textarea">
                                <textarea className="main__content--modal-area" onChange={this.handleTextChange} name="messageBody" type="text" placeholder="Message Body"/>
                            </div>
                            <div className="main__content--modal-buttons">
                                <button className="main__content--modal-cancel" type="cancel"
                                        onClick={this.handleHide()}>
                                    cancel
                                </button>
                                <button  className="main__content--modal-send" type="submit">send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;
        return (
            <div className="app">
                <button className="button-plus" onClick={this.handleShow()}><Sign name="add"/></button>
                {modal}
            </div>
        );
    }
}

export default connect(state => ({sentModal: state.sentModal} ), {postfetchStatistic, postUsageStatistics})(Show);

