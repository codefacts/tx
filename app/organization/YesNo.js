"use strict";

import React from 'react';

class YesNo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var $this = this;
        var value = $this.props.value;

        return !!value ? (<span className="glyphicon glyphicon-ok"></span>)
            : (<span className="glyphicon glyphicon-remove"></span>);
    }
}

module.exports = YesNo;