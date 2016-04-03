//..................................................................................
//Create EventBus
var Apis = require('./Apis');
var EventBus = require("vertx3-eventbus-client");
//var eb = new EventBus(Apis.BASE_URI + '/eventbus');
var eb = {};
var ee = require('./EventEmitter');
var Events = require('./Events');
//
//eb.onopen = function onopen() {
//
//    console.info("EVENT_BUS OPENED");
//
//    ee.emit(Events.EVENT_BUS_CONNECTED, eb);
//}
//
//eb.onclose = function () {
//
//    console.info("EVENT_BUS CLOSED");
//
//    ee.emit(Events.EVENT_BUS_DISCONNECTED, eb);
//}

ee.emit(Events.EVENT_BUS_CONNECTED, eb);

module.exports = eb;