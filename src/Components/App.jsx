import React, { Component } from 'react';
import NavBar from './UI/nav';
import { Route, withRouter, Redirect } from 'react-router';
import Home from './Home/main';
import Portfolio from './Portfolio/main';
import Dashboard from './Dashboard/main';

class App extends Component {

    componentDidMount() {
        this.props.actions.retrieveMarketTickers(["SPY", "DIA"]);
    }
    render() {

        const loggedIn = false;
        const { history, currentTickers } = this.props;

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
                <Route path="/Home" render={(props) => <Home {...this.props} />}/>
                <Route path="/Dashboard" render={(props) => <Dashboard {...this.props} />}/>
                <Route path="/Portfolio" component={Portfolio}/>
            </div>
        );
    }
}

export default withRouter(App);