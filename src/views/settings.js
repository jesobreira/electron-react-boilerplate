import React, { Component } from 'react'

export default class Settings extends Component {
	constructor() {
        super()
        this.state = {
            opened: false
        }
    }

    save = () => {

        this.setState({ opened: false })
    }

    render() {
        return (
            <React.Fragment>
                <div className="entity-list-item" onClick={() => this.setState({ opened: !this.state.opened }) }>
                    <div className="item-icon">
                        <span className="glyph glyph-settings" />
                    </div>
                    <div className="item-content-primary">
                        <div className="content-text-primary">Configurações</div>
                    </div>
                </div>

                <div className="modal" id="modal-sample"
                     tabIndex={-1} role="dialog" style={{ display: this.state.opened ? 'block' : 'none' }}
                     aria-labelledby="modal-sample-label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title type-t3">
                                    Configurações
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        This is a sample settings page.
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.save}>
                                    Save
                                </button>
                                <button type="button" className="btn btn-info"
                                        onClick={() => this.setState({ opened: false }) }>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}