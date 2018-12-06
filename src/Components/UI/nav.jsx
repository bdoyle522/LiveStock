import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">LiveStock</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Herds</a>
                        </li>
                    </ul>
                </div>
                {/* <a className="navbar-brand" href="#">
                    <img src="https://www.kiplinger.com/slideshow/investing/T052-S001-7-stocks-to-buy-in-case-this-bull-market-stalls/images/intro.jpg" width="30" height="30" alt="" />
                </a> */}
            </nav>
        );
    }
}