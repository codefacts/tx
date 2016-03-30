"use strict";
var ee = require('./EventEmmiter');
var eb = require('./EventBus');

var ServerEvents = require('./ServerEvents');
var Events = require('./Events');

var Promise = require('bluebird');

class UserService {

    findAll(params) {
        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.FIND_ALL_USERS, params, null, function (err, msg) {
                if (!!err || !!msg.failureCode) {
                    reject(err || msg);
                    return;
                }

                resolve(msg.body);
            });
        });
    }

    find(id) {
        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.FIND_USER, id, null, function (err, msg) {
                if (!!err || !!msg.failureCode) {
                    reject(err || msg);
                    return;
                }

                resolve(msg.body);
            });
        });
    }

    create(user) {
        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.CREATE_USER, user, null, function (err, msg) {
                if (!!err || !!msg.failureCode) {
                    reject(err || msg);
                    return;
                }

                resolve(msg.body);

                ee.emit(Events.USER_CREATED, msg.body);
            });
        });
    }

    update(user) {
        eb.send(ServerEvents.UPDATE_USER, user, null, function (err, msg) {
            if (!!err || !!msg.failureCode) {
                reject(err || msg);
                return;
            }

            resolve(msg.body);

            ee.emit(Events.USER_UPDATED, msg.body);
        });
    }

    delete(id) {
        eb.send(ServerEvents.DELETE_USER, id, null, function (err, msg) {
            if (!!err || !!msg.failureCode) {
                reject(err || msg);
                return;
            }

            resolve(msg.body);

            ee.emit(Events.USER_DELETED, msg.body);
        });
    }
}

module.exports = new UserService();