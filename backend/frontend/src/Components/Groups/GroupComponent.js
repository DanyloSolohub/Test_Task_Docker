import React, {Component} from 'react';
import {GroupServices} from "../../Services/GroupServices";
import EditGroup from "./EditGroup";

class GroupComponent extends Component {
    GroupService = new GroupServices()
    state = {flag: false}

    showEditGroup = () => {
        this.setState({flag: !this.state.flag})
    }
    delete = () => {
        this.GroupService.DeleteGroup(this.props.group.id)
            .then(value => value.json())
        window.location.reload()
    }

    render() {
        let {group} = this.props
        let {flag} = this.state
        return (
            <div>
                {!flag && (<div className={'item'}>
                        <div className={'id txt'}>{group.id}.</div>
                        <div className={'email txt'}>{group.name}</div>
                        <div className={'group txt'}>{group.users.length}</div>
                        <div className={'btn_group'}>
                            <button disabled={group.users.length} className={"btn btn-danger"}
                                    onClick={this.delete}>Delete
                            </button>
                            <button className={"btn btn-secondary"} onClick={this.showEditGroup}>Edit</button>
                        </div>
                    </div>
                )}
                {flag && (<EditGroup group={group} id={group.id} key={group.id}/>)}
                {flag && (<button onClick={this.showEditGroup} className={"btn btn-secondary width"}>Back</button>)}
                <hr/>

            </div>
        );
    }
}

export default GroupComponent;