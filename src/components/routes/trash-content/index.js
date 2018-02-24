// @flow
import React, {Component} from 'react';
import '../../routes/style.styl';
import {connect} from 'react-redux';
import { fetchTrashStatistic, getTrashUsageStatistics } from './actions'
import ListItem from './components/index';


type PropsMain = {
    isOpen: boolean,
    current: {}
}

type StateMain = {
    openMessage: any,
};

class Trashcontent extends Component<PropsMain, StateMain> {
    constructor(props){
        super(props)
    }

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



export default connect(state => ({
    trashContent: state.trashContent
}),{fetchTrashStatistic, getTrashUsageStatistics})
(Trashcontent);
