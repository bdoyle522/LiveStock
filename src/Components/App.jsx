import React, { Component } from 'react';
import NavBar from './UI/nav';
import { Route, withRouter, Redirect } from 'react-router';
import Home from './Home/main';
import Portfolio from './Portfolio/main';
import Dashboard from './Dashboard/main';

class App extends Component {

    render() {

        const loggedIn = true;
        const { history } = this.props;

        return (
            <div>
                <NavBar history={history}/>
                <Route exact path="/" render={() => (
                    loggedIn ? (
                        <Redirect to="/Dashboard"/>
                    ) : (
                        <Redirect to="/Home"/>
                    )
                )}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/Portfolio" component={Portfolio}/>
            </div>
        );
    }
}

class SomeComponent extends Component {

    render() {
        return <div>Hello</div>
    }
}

export default withRouter(App);