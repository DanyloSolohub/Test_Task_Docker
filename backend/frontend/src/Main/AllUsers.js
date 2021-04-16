import React, {Component} from 'react';
import {UserServices} from '../Services/UserServices'
import UserComponent from "../Components/Users/UserComponent";
import CreateUser from "../Components/Users/CreateUser";
import './Style.css'

class AllUsers extends Component {
    state = {users: [], flag: true}
    UserService = new UserServices()

    showComponent() {
        this.setState({flag: !this.state.flag})
    }

    render() {
        let {users, flag} = this.state
        return (
            <div className={'items_list'}>
                <div className={'create_div'}>
                    <button className={"btn btn-primary"}
                            onClick={() => this.showComponent()}>{flag ? 'Create User' : 'Back'}</button>
                </div>
                <div className={'items_txt'}>
                    <div className={'id txt'}>Id</div>
                    <div className={'email txt'}>Email</div>
                    <div className={'group txt'}>Group №</div>
                    <div className={'actions txt'}>Actions</div>
                </div>
                <br/>
                {flag && (users.map(user => <UserComponent user={user} key={user.id}/>))}
                {!flag && (<CreateUser/>)}
            </div>
        );
    }

    componentDidMount() {
        this.UserService.getAllUsers().then(users => this.setState({users: users}))
    }
}

export default AllUsers;