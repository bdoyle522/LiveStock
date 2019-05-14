import React, { Component } from 'react';

export default class Dashboard extends Component {
    
    render() {

        const { currentTickers } = this.props;

        return (
            <div className="container">
                <ol>
                    <li>
                        User Portfolio info (market val change)
                    </li>
                    <li>
                        Tickers personalized for user
                    </li>
                    <li>
                        
                    </li>
                </ol>
            </div>
        );
    }
}