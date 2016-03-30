"use strict";
import React from 'react'
var eb = require('.././EventBus');
var ServerEvents = require('./ServerEvents');
var ViewUser;
module.exports = ViewUser = React.createClass({
    getDefaultProps: function () {
        return {
            id: null
        };
    },
    getInitialState: function () {
        return {
            user: {}
        };
    },
    componentDidMount: function () {
        var $this = this;
        eb.send(ServerEvents.FIND_USER, $this.props.id, {}, function (err, msg) {
            if (!!msg.failureCode) {
                console.error(msg.message);
                return;
            }

            $this.setState({user: msg.body});
        });
    },
    render: function () {
        var $this = this;
        var user = $this.state.user;
        return <div>{JSON.stringify(user)}</div>
    }
})