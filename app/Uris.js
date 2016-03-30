"use strict";

var Uris = {
    BASE_URI: "/",
    USER: {
        CREATE: '/user/create',
        VIEW: '/user/view/:id',
        EDIT: '/user/edit/:id',
        BASE: '/user/index',
    },
    ORGANIZATION: {
        CREATE: '/organization/create',
        VIEW: '/organization/view/:id',
        EDIT: '/organization/edit/:id',
        BASE: '/organization/index',
    },
    toAbsoluteUri: toAbsoluteUri
}

function toAbsoluteUri(str) {
    str = str || "";
    return 'users-home#' + str.replace('(', '').replace(')', '');
}

module.exports = Uris;