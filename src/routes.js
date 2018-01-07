import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Signup from './components/signup/signup.component';
import Signin from './components/signin/signin.component';
import Landingpage from './components/landingpage/landingpage.component';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/guessnumber" component={Landingpage}/>
        </Route>
    </Router>
);
