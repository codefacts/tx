"use strict"
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
var YesNo = require('./YesNo');

class OrganizationList extends React.Component {
    constructor(props) {
        super(props);
        this.formatAction.bind(this);
    }

    render() {
        var $this = this;
        var organizations = $this.props.organizations || [];

        var cellEditProp = {
            mode: "dbclick",
            blurToSave: true,
            afterSaveCell: $this.saveCell
        }

        return (
            <BootstrapTable data={organizations} striped={true} hover={true} cellEdit={cellEditProp}>

                <TableHeaderColumn isKey={true}
                                   dataField="id">ID</TableHeaderColumn>

                <TableHeaderColumn dataField="shortName">Short Name</TableHeaderColumn>

                <TableHeaderColumn dataField="name">Name</TableHeaderColumn>

                <TableHeaderColumn dataField="active" editable={false}
                                   dataFormat={$this.formatActive}>Active</TableHeaderColumn>

                <TableHeaderColumn dataField="remarks">Remarks</TableHeaderColumn>

                <TableHeaderColumn dataField="action" editable={false}
                                   dataFormat={$this.formatAction}>Action</TableHeaderColumn>

            </BootstrapTable>
        );
    }

    saveCell(row, name, value) {

    }

    formatActive(active) {
        return <YesNo value={active}/>;
    }

    formatAction(action, organization) {
        var $this = this;
        return (
            <div>
                <span className="btn btn-danger">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </span>
            </div>
        );
    }
}

OrganizationList.defaultProps = {
    organizations: []
};

module.exports = OrganizationList;