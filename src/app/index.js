// @flow

import React, {Component} from 'react';
import './styles.styl';
import Layout from '../components/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Inboxcontent from '../components/routes/inbox-content';
import Sentcontent from '../components/routes/sent-content';
import Spamcontent from '../components/routes/spam-content';
import Trashcontent from '../components/routes/trash-content';
import PageNotFound from '../components/routes/page-not-found';
import {Provider} from 'react-redux';
import store from '../store';

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
            <Layout>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Inboxcontent}/>
                        <Route path="/inbox-content" component={Inboxcontent}/>
                        <Route path="/sent-content" component={Sentcontent}/>
                        <Route path="/spam-content" component={Spamcontent}/>
                        <Route path="/trash-content" component={Trashcontent}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </Layout>
            </Provider>
        );
    }
}

export default App;