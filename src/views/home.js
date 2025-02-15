import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const electron = require('electron')
const nodeFetch = electron.remote.require('electron-fetch').default

import store from '../services/store'

import Settings from './settings'

import HomePainel from './HomePainel'

export default class Home extends Component {
	constructor() {
        super()

        let webFrame = require('electron').webFrame
        webFrame.setVisualZoomLevelLimits(1, 1)
        webFrame.setLayoutZoomLevelLimits(0, 0)
    }
    
    render() {
        return (
            <div className="container-fixed">


                <div className="row-xs-12 drawer col-md-6 color-fill-dim-low active-drawer">
                    <div className="entity-list">

                        <React.Fragment>

                            <div className="entity-list-item" onClick={() => this.setState({ active: 'home' })}>
                                <div className="item-icon">
                                    <span className="glyph glyph-home" />
                                </div>
                                <div className="item-content-primary">
                                    <div className="content-text-primary">Home</div>
                                </div>
                            </div>


                            <Settings parent={this} />

                        </React.Fragment>


                    </div>
                </div>

                <div className="row-xs-12 col-md-18">
                    Hello, world!
                </div>
            </div>
        )
    }
}