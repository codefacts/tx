"use strict"
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
var AuthoritiesListViewEmbed = require('./AuthoritiesListViewEmbed');
var userService = require('./UserService');

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.formatAction.bind(this);
        this.doDeleteUser.bind(this);
    }

    render() {
        var $this = this;
        var users = $this.props.users || [];

        var cellEditProp = {
            mode: "dbclick",
            blurToSave: true,
            afterSaveCell: $this.doUpdateUser
        }

        return (
            <BootstrapTable data={users} striped={true} hover={true} cellEdit={cellEditProp}>

                <TableHeaderColumn isKey={true}
                                   dataField="id" hidden={true}>ID</TableHeaderColumn>

                <TableHeaderColumn dataField="userId">User ID</TableHeaderColumn>

                <TableHeaderColumn dataField="username">Username</TableHeaderColumn>
                <TableHeaderColumn dataField="name">Name</TableHeaderColumn>

                <TableHeaderColumn dataField="phone">Phone</TableHeaderColumn>

                <TableHeaderColumn dataField="address">Address</TableHeaderColumn>
                <TableHeaderColumn dataField="remarks">Remarks</TableHeaderColumn>

                <TableHeaderColumn dataField="remarks" editable={false}
                                   dataFormat={$this.formatAction.bind($this)}>Action</TableHeaderColumn>

            </BootstrapTable>
        );
    }

    doUpdateUser(user, name, value) {
        userService.update(user);
    }

    doDeleteUser(user) {
        userService.delete(user.id);
    }

    formatAction(action, user) {
        var $this = this;
        return (
            <div>
                <span className="btn btn-danger" onClick={function (e) {
                    $this.doDeleteUser(user);
                }}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </span>
            </div>
        );
    }
}

UserList.defaultProps = {
    users: []
};

module.exports = UserList;