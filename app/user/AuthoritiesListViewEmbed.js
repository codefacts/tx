"use strict";

import React from 'react';

class AuthoritiesListVIewEmbed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var $this = this;
        var authorities = $this.props.roles || [];
        return (
            <div>
                {
                    authorities.map(function (auth, index) {
                        return ((authorities.length - 1) === index) ? (<span key={auth.id}>{auth.name}</span>) : (
                            <span key={auth.id}>{auth.name}, </span>
                        )
                    })
                }
            </div>
        );
    }
}

AuthoritiesListVIewEmbed.defaultProps = {
    authorities: []
}

module.exports = AuthoritiesListVIewEmbed;