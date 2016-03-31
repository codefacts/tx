"use strict";

var Promise = require('bluebird');
var ee = require('./EventEmitter');
var Events = require('./Events');

class AuthService {

    constructor() {
        this.token = null;
        this.login.bind(this);
        this.isLoggedIn.bind(this);
        this.logout.bind(this);
    }

    login(user) {
        var $this = this;

        return new Promise(function (resolve) {
            $this.token = 'A_TOKEN';
            resolve(user);
            ee.emit(Events.USER_LOGGED_IN, user);
        });
    }

    isLoggedIn() {
        var $this = this;

        return !!$this.token;
    }

    logout() {
        var $this = this;

        return new Promise(function (resolve) {
            $this.token = null;
            resolve(true);
            ee.emit(Events.USER_LOGGED_OUT);
        });
    }
}

var auth = new AuthService();

module.exports = auth;