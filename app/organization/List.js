"use strict"
import React from 'react';
var OrganizationList = require('./OrganizationList');
var Modal = require('../../../components/Modal');
var CreateNewOrganizationForm = require('./CreateNewOrganizationForm');

var ee = require('./EventEmmiter');
var Events = require('./Events');

var organizationService = require('./OrganizationService');

class ListOrganization extends React.Component {
    constructor(props) {
        super(props);
        var $this = this;

        $this.createNewOrganization.bind($this);
        $this.onClose.bind($this);
        $this.updateOrganizations.bind($this);

        this.state = {
            createModal: null,
            organizations: [
                {
                    id: 1,
                    name: 'sohan',
                    shortName: 'id-1',
                    active: true,
                    remarks: 'id-1',
                },
                {
                    id: 2,
                    name: 'sohan',
                    shortName: 'id-1',
                    active: true,
                    remarks: 'id-1',
                },
                {
                    id: 3,
                    name: 'sohan',
                    shortName: 'id-1',
                    active: true,
                    remarks: 'id-1',
                },
            ]
        };
    }

    componentDidMount() {
        var $this = this;
        $this.updateOrganizations();

        ee.on(Events.ORGANIZATION_CREATED, $this.onOrganizationChange.bind($this));
        ee.on(Events.ORGANIZATION_UPDATED, $this.onOrganizationChange.bind($this));
        ee.on(Events.ORGANIZATION_DELETED, $this.onOrganizationChange.bind($this));
    }

    componentWillUnmount() {
        var $this = this;
        ee.removeListener(Events.ORGANIZATION_CREATED, $this.onOrganizationChange.bind($this));
        ee.removeListener(Events.ORGANIZATION_UPDATED, $this.onOrganizationChange.bind($this));
        ee.removeListener(Events.ORGANIZATION_DELETED, $this.onOrganizationChange.bind($this));
    }

    render() {
        var $this = this;
        var organizations = $this.state.organizations;
        var createModal = $this.state.createModal;
        return (

            <div className="row">
                <div className="col-md-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-md-6">

                                    <h3 className="panel-title">All Organizations [ Total: {organizations.length} ]</h3>

                                </div>
                                <div className="col-md-6">
                                    <span className="btn btn-primary pull-right"
                                          onClick={$this.createNewOrganization.bind($this)}>Create New</span>
                                </div>
                            </div>
                        </div>
                        <OrganizationList organizations={organizations}/>
                    </div>

                    {
                        !createModal ? null : createModal()
                    }

                </div>
            </div>
        );
    }

    createNewOrganization() {
        var $this = this;

        $this.setState({
            organization: {},
            createModal: function () {
                return (
                    <Modal title={<h3 className="modal-title text-primary">Create New Organization</h3>}
                           body={
                               <CreateNewOrganizationForm organization={$this.state.organization}
                               onChange={$this.onOrganizationFormChange.bind($this)}
                               onSubmit={$this.doCreateNewOrganization.bind($this)}/>
                           }
                           footer={
                               <div>
                                    <span className="btn btn-primary pull-right"
                                        onClick={$this.doCreateNewOrganization.bind($this)}>Create Organization</span>
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

    doCreateNewOrganization() {
        var $this = this;
        organizationService.create($this.state.organization)
            .then(id => $this.onClose());
    }

    onOrganizationFormChange(e) {
        var $this = this;
        var org = $this.state.organization || {};
        org[e.target.name] = e.target.value;
        $this.setState({organization: org});
    }

    onOrganizationChange() {
        var $this = this;
        $this.updateOrganizations();
    }

    updateOrganizations(params) {
        var $this = this;
        organizationService.findAll(params)
            .then(rsp => {
                $this.setState({
                    organizations: rsp.data
                });
            })
        ;
    }
}

module.exports = ListOrganization;