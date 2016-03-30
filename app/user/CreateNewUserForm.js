"use strict";

import React from 'react';

class CreateNewUserForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var $this = this;
        var user = $this.props.user || {};
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input type="text" className="form-control" id="userId" placeholder="User ID"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Address"/>
                </div>

                <div className="form-group">
                    <label htmlFor="remarks">Remarks</label>
                    <input type="text" className="form-control" id="remarks" placeholder="Remarks"/>
                </div>
                
            </form>
        );
    }
}

CreateNewUserForm.defaultProps = {
    user: {}
};

module.exports = CreateNewUserForm;