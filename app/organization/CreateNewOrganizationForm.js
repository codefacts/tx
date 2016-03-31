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
            <form onSubmit={$this.props.onSubmit}>

                <div className="form-group">
                    <label htmlFor="shortName">Short Name</label>
                    <input type="text" className="form-control" id="shortName" placeholder="Short Name"
                           name="shortName" value={organization.shortName} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name"
                           name="name" value={organization.name} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="remarks">Remarks</label>
                    <input type="text" className="form-control" id="remarks" placeholder="Remarks"
                           name="remarks" value={organization.remarks} onChange={$this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="active">Active</label>
                    <select className="form-control"
                            id="active" name="active" value={organization.active} onChange={$this.props.onChange}>
                        <option value={''}>Select active status</option>
                        {
                            [{value: true, name: 'Yes'}, {value: false, name: 'No'}].map(function (op) {
                                return (
                                    <option key={op.value} value={op.value}>{op.name}</option>
                                );
                            })
                        }
                    </select>
                </div>

            </form>
        );
    }
}

CreateNewOrganizationForm.defaultProps = {
    organization: {}
};

module.exports = CreateNewOrganizationForm;