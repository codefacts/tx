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
            <form onSubmit={() => $this.props.onSubmit(e, user)}>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input type="text" className="form-control" id="userId" placeholder="User ID"
                           name="userId" value={user.userId} onChange={$this.props.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username"
                           name="username" value={user.username} onChange={$this.props.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"
                           name="password" value={user.password} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name"
                           name="name" value={user.name} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone"
                           name="phone" value={user.phone} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email"
                           name="email" value={user.email} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Address"
                           name="address" value={user.address} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="remarks">Remarks</label>
                    <input type="text" className="form-control" id="remarks" placeholder="Remarks"
                           name="remarks" value={user.remarks} onChange={$this.props.onChange}/>
                </div>

            </form>
        );
    }
}

CreateNewUserForm.defaultProps = {
    user: {},
    onSubmit: null,
    onChange: null
};

module.exports = CreateNewUserForm;