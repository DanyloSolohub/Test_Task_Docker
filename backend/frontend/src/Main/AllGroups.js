import React, {Component} from 'react';
import {GroupServices} from "../Services/GroupServices";
import GroupComponent from "../Components/Groups/GroupComponent";
import CreateGroup from "../Components/Groups/CreateGroup";
import './Style.css'

class AllGroups extends Component {
    state = {groups: [], flag: true}
    GroupService = new GroupServices()

    showComponent() {
        this.setState({flag: !this.state.flag})
    }

    render() {
        let {groups, flag} = this.state
        return (
            <div className={'items_list'}>
                <div className={'create_div'}>
                    <button className={"btn btn-primary"}
                            onClick={() => this.showComponent()}>{flag ? 'Create Group' : 'Back'}
                    </button>
                </div>
                <div className={'items_txt'}>
                    <div className={'id txt'}>Id</div>
                    <div className={'email txt'}>Name</div>
                    <div className={'group txt'}>Participants</div>
                    <div className={'actions txt'}>Actions</div>
                </div>
                <br/>
                {flag && (groups.map(group => <GroupComponent group={group} key={group.id}/>))}
                {!flag && (<CreateGroup/>)}
            </div>
        );
    }

    componentDidMount() {
        this.GroupService.getAllGroups().then(groups => this.setState({groups: groups}))
    }
}

export default AllGroups;