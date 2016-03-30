"use strict";

import React from 'react';

class EditUser extends React.Component {
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

module.exports = EditUser;