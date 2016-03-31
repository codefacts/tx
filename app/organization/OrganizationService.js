"use strict";
var ee = require('./EventEmmiter');
var eb = require('./EventBus');

var ServerEvents = require('./ServerEvents');
var Events = require('./Events');

var Promise = require('bluebird');

class OrganizationService {

    findAll(params) {
        console.log(params, params);

        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.FIND_ALL_ORGANIZATIONS, params, null, function (err, msg) {
                if (!!err || !!msg.failureCode || !!(msg.headers || {}).responseCode) {
                    reject(err || msg);

                    console.log("Error " + Events.ORGANIZATION_CREATED, err || msg);
                    return;
                }

                resolve(msg.body);
            });
        });
    }

    find(id) {
        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.FIND_ORGANIZATION, id, null, function (err, msg) {
                if (!!err || !!msg.failureCode || !!(msg.headers || {}).responseCode) {
                    reject(err || msg);

                    console.log("Error " + Events.ORGANIZATION_CREATED, err || msg);
                    return;
                }

                resolve(msg.body);
            });
        });
    }

    create(user) {
        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.CREATE_ORGANIZATION, user, null, function (err, msg) {
                if (!!err || !!msg.failureCode || !!(msg.headers || {}).responseCode) {
                    reject(err || msg);

                    console.log("Error " + Events.ORGANIZATION_CREATED, err || msg);
                    return;
                }

                resolve(msg.body);

                ee.emit(Events.ORGANIZATION_CREATED, msg.body);

                console.log(Events.ORGANIZATION_CREATED, user);
            });
        });
    }

    update(user) {
        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.UPDATE_ORGANIZATION, user, null, function (err, msg) {
                if (!!err || !!msg.failureCode || !!(msg.headers || {}).responseCode) {
                    reject(err || msg);

                    console.log("Error " + Events.ORGANIZATION_CREATED, err || msg);
                    return;
                }

                resolve(msg.body);

                ee.emit(Events.ORGANIZATION_UPDATED, msg.body);
            });
        });
    }

    delete(id) {
        return new Promise(function (resolve, reject) {
            eb.send(ServerEvents.DELETE_ORGANIZATION, id, null, function (err, msg) {
                if (!!err || !!msg.failureCode || !!(msg.headers || {}).responseCode) {
                    reject(err || msg);

                    console.log("Error " + Events.ORGANIZATION_CREATED, err || msg);
                    return;
                }

                resolve(msg.body);

                ee.emit(Events.ORGANIZATION_DELETED, msg.body);
            });
        });
    }
}

module.exports = new OrganizationService();