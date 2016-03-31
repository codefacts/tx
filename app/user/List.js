"use strict"
import React from 'react';
var UserList = require('./UserList');
var Modal = require('../../../components/Modal');
var CreateNewUserForm = require('./CreateNewUserForm');
var userService = require('./UserService');

var ee = require('./EventEmmiter');
var Events = require('./Events');

class ListUser extends React.Component {
    constructor(props) {
        super(props);
        var $this = this;

        $this.createNewUser.bind($this);
        $this.closeUserForm.bind($this);
        $this.doCreateNewUser.bind($this);

        $this.componentDidMount.bind($this);
        $this.componentWillUnmount.bind($this);
        $this.updateUsers.bind($this);
        this.onUserChange.bind(this);
        this.onUserSubmit.bind(this);

        this.state = {
            createModal: null,
            users: [
                {
                    id: 1,
                    name: 'sohan',
                    userId: 'id-1',
                    authorities: [
                        {id: 1, name: 'seller'},
                        {id: 2, name: 'manager'},
                    ]
                },
                {
                    id: 2,
                    name: 'sohan',
                    userId: 'id-2',
                    authorities: [
                        {id: 1, name: 'seller'},
                        {id: 2, name: 'manager'},
                    ]
                },
                {
                    id: 3,
                    name: 'sohan',
                    userId: 'id-3',
                    authorities: [
                        {id: 1, name: 'seller'},
                        {id: 2, name: 'manager'},
                    ]
                },
            ]
        };
    }

    componentDidMount() {
        var $this = this;
        $this.updateUsers.call($this);
        ee.on(Events.USER_CREATED, $this.updateUsers.bind($this));
        ee.on(Events.USER_UPDATED, $this.updateUsers.bind($this));
        ee.on(Events.USER_DELETED, $this.updateUsers.bind($this));
    }

    componentWillUnmount() {
        var $this = this;
        ee.removeListener(Events.USER_CREATED, $this.updateUsers.bind($this));
        ee.removeListener(Events.USER_UPDATED, $this.updateUsers.bind($this));
        ee.removeListener(Events.USER_DELETED, $this.updateUsers.bind($this));
    }

    updateUsers(e) {
        var $this = this;
        userService.findAll()
            .then(rsp => {
                $this.setState({
                    users: rsp.data
                });
            });
    }

    render() {
        var $this = this;
        var users = $this.state.users || [];
        var createModal = $this.state.createModal;
        return (

            <div className="row">
                <div className="col-md-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-md-6">

                                    <h3 className="panel-title">All Users [ Total: {users.length} ]</h3>

                                </div>
                                <div className="col-md-6">
                                    <span className="btn btn-primary pull-right"
                                          onClick={$this.createNewUser.bind($this)}>Create New</span>
                                </div>
                            </div>
                        </div>
                        <UserList users={users}/>
                    </div>

                    {
                        !createModal ? null : createModal()
                    }

                </div>
            </div>
        );
    }

    createNewUser() {
        var $this = this;

        $this.setState({
            user: {},
            createModal: function () {
                return (
                    <Modal title={<h3 className="modal-title text-primary">Create New User</h3>}
                           body={<CreateNewUserForm user={$this.state.user}
                           onSubmit={$this.onUserSubmit.bind($this)}
                           onChange={$this.onUserChange.bind($this)}/>}
                           footer={
                               <div>
                                    <span className="btn btn-primary pull-right"
                                        onClick={() => $this.doCreateNewUser.call($this, $this.state.user)}>Create User</span>
                                    <span className="btn btn-danger pull-right" style={{marginRight: '10px'}}
                                    onClick={$this.closeUserForm.bind($this)}>Cancel</span>
                               </div>
                           }
                           onClose={$this.closeUserForm.bind($this)} isOpen={true}/>
                );
            }
        });
    }

    onUserChange(e) {
        var $this = this;
        var user = $this.state.user || {};
        user[e.target.name] = e.target.value;
        $this.setState({user: user});
    }

    onUserSubmit(e, user) {
        e.preventDefault();
        this.doCreateNewUser(user);
    }

    doCreateNewUser(user) {
        userService.create(user);
        this.closeUserForm();
    }

    closeUserForm() {
        var $this = this;

        $this.setState({
            createModal: function () {
                return (
                    <Modal onClose={$this.closeUserForm.bind($this)} isOpen={false}/>
                );
            }
        });
    }
}

module.exports = ListUser;