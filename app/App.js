"use strict";

import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var $this = this;

        return (

            <div className="row">
                <div className="col-md-12">

                    {$this.props.children}

                </div>
            </div>
        );
    }
}

module.exports = App;