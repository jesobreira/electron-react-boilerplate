import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Home from './views/home'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home } />
                </Switch>
            </Router>
        )
    }
}
