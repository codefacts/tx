"use strict"
import React from 'react';
var UserList = require('./UserList');
var Modal = require('../../../components/Modal');
var CreateNewUserForm = require('./CreateNewUserForm');

class ListUser extends React.Component {
    constructor(props) {
        super(props);
        var $this = this;

        $this.createNewUser.bind($this);
        $this.onClose.bind($this);

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
            createModal: function () {
                return (
                    <Modal title={<h3 className="modal-title text-primary">Create New User</h3>}
                           body={<CreateNewUserForm user={$this.state.user}/>}
                           footer={
                               <div>
                                    <span className="btn btn-primary pull-right">Create User</span>
                                    <span className="btn btn-danger pull-right" style={{marginRight: '10px'}}
                                    onClick={$this.onClose.bind($this)}>Cancel</span>
                               </div>
                           }
                           onClose={$this.onClose.bind($this)} isOpen={true}/>
                );
            }
        });
    }

    onClose() {
        var $this = this;

        $this.setState({
            createModal: function () {
                return (
                    <Modal onClose={$this.onClose.bind($this)} isOpen={false}/>
                );
            }
        });
    }
}

module.exports = ListUser;