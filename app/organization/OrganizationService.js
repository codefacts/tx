"use strict";
var ee = require('./EventEmmiter');
var eb = require('./EventBus');

var ServerEvents = require('./ServerEvents');
var Events = require('./Events');

var Promise = require('bluebird');

var $ = require('jquery');
var base_uri = 'http://localhost/tx';

class OrganizationService {

    findAll(params) {
        console.log(params, params);

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: base_uri + '/FIND_ALL_ORGANIZATIONS',
                success: function (list) {
                    resolve({data: list});
                },
                error: reject
            });
        });
    }

    find(id) {
        return new Promise(function (resolve, reject) {

        });
    }

    create(user) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: base_uri + '/CREATE_ORGANIZATION',
                method: 'POST',
                data: user,
                success: resolve,
                error: reject
            });

            ee.emit(Events.ORGANIZATION_CREATED, 1);

            console.log(Events.ORGANIZATION_CREATED, user);
        });
    }

    update(user) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: base_uri + '/UPDATE_ORGANIZATION',
                method: 'POST',
                data: user,
                success: resolve,
                error: reject
            });

            ee.emit(Events.ORGANIZATION_UPDATED, user.id);
        });
    }

    delete(id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: base_uri + '/DELETE_ORGANIZATION',
                method: 'POST',
                data: {id: id},
                success: resolve,
                error: reject
            });

            ee.emit(Events.ORGANIZATION_DELETED, id);
        });
    }
}

module.exports = new OrganizationService();