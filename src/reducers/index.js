// @flow

import {combineReducers} from 'redux';

import inboxContent from  '../components/routes/inbox-content/reducers';
import sentContent from '../components/routes/sent-content/reducers';
import spamContent from '../components/routes/spam-content/reducers';
import trashContent from '../components/routes/trash-content/reducers';
import sentModal from '../components/modal-button/reducers';
import removeTrashContent from '../components/routes/trash-content/reducers';

export default combineReducers({
    inboxContent,
    sentContent,
    spamContent,
    trashContent,
    sentModal,
    removeTrashContent
});
