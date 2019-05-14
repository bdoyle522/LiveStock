import React, { Component } from 'react';

export default class Home extends Component {
    render() {

        const { currentTickers } = this.props;

        const ticks = currentTickers.map((tick, i) => {
            return(
                <HomeTicker
                    symbol={tick.get("symbol")}
                    latestPrice={tick.get("latestPrice")}
                    companyName={tick.get("companyName")}
                    key={`{t${i}}`} />
            )
        })
        return (
            <div className="container">
                <ol>
                    <li>
                        
                    </li>
                    <li>
                        Sign up! stuff
                    </li>
                    <li>
                        whatever
                    </li>
                </ol>

                <div className="container" style={{display: 'flex', flexDirection: 'row'}}>
                    {ticks}
                </div>
                
            </div>
        );
    }
}

class HomeTicker extends Component {

    render() {

        const { symbol, latestPrice, companyName, change, changePercentage } = this.props;
        return(
            <div className="card" style={{width: "18rem", textAlign: "center"}}>
                <div className="card-body">
                    <h5 className="card-title">{symbol}: {latestPrice}</h5>
                    <h6>{companyName}</h6>
                    <p className="card-text">The change and change percentage with appropriate styling</p>
                </div>
            </div>
        )
    }
}