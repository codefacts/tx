import { Router, Route, hashHistory, IndexRoute } from 'react-router'

var App = require('./App');
var React = require('react');
var ReactDom = require('react-dom');

var Uris = require('./Uris');
var Events = require('./Events');
var ee = require('./EventEmitter');

var Dashboard = require('./pages/Dashboard');

var UserApp = require('./user');
var ListUsers = require('./user/List');
var CreateUser = require('./user/Create');
var EditUser = require('./user/Edit');
var ViewUser = require('./user/View');

var OrganizationApp = require('./organization');
var ListOrganization = require('./organization/List');
var CreateOrganization = require('./organization/Create');
var EditOrganization = require('./organization/Edit');
var ViewOrganization = require('./organization/View');

//Create and initialize app when eventbus initialization complete.
ee.on(Events.EVENT_BUS_CONNECTED, function () {

    ReactDom.render(
        <Router history={hashHistory}>
            <Route path={Uris.BASE_URI} component={App}>

                <IndexRoute component={Dashboard}/>

                <Route path={Uris.USER.BASE} component={UserApp}>
                    <IndexRoute component={ListUsers}/>
                    <Route path={Uris.USER.CREATE} component={CreateUser}/>
                    <Route path={Uris.USER.VIEW} component={ViewUser}/>
                    <Route path={Uris.USER.EDIT} component={EditUser}/>
                </Route>

                <Route path={Uris.ORGANIZATION.BASE} component={OrganizationApp}>
                    <IndexRoute component={ListOrganization}/>
                    <Route path={Uris.ORGANIZATION.CREATE} component={CreateOrganization}/>
                    <Route path={Uris.ORGANIZATION.VIEW} component={ViewOrganization}/>
                    <Route path={Uris.ORGANIZATION.EDIT} component={EditOrganization}/>
                </Route>

            </Route>
        </Router>, document.getElementById('app'));
});

//Create the EventBus
window.eb = require('./EventBus');
window.Events = Events;