"use strict";

import React from 'react';

class CreateNewOrganizationForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var $this = this;
        var organization = $this.props.organization || {};
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="text" className="form-control" id="id" placeholder="ID"/>
                </div>

                <div className="form-group">
                    <label htmlFor="shortName">Short Name</label>
                    <input type="text" className="form-control" id="shortName" placeholder="Short Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="remarks">Remarks</label>
                    <input type="text" className="form-control" id="remarks" placeholder="Remarks"/>
                </div>

                <div className="form-group">
                    <label htmlFor="active">Active</label>
                    <input type="text" className="form-control" id="active" placeholder="Active"/>
                </div>

            </form>
        );
    }
}

CreateNewOrganizationForm.defaultProps = {
    organization: {}
};

module.exports = CreateNewOrganizationForm;