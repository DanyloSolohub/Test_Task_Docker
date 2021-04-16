import React, {Component} from 'react';
import EditUser from "./EditUser";
import {UserServices} from "../../Services/UserServices";
class UserComponent extends Component {
    UserService = new UserServices()
    state = {flag: false}

    showEditUser = () => {
        this.setState({flag: !this.state.flag})
    }
    delete = () => {
        this.UserService.DeleteUser(this.props.user.id)
            .then(value => console.log(value))
        window.location.reload()
    }

    render() {
        let {user} = this.props
        let {flag} = this.state
        return (
            <div>
                {!flag && (<div className={'item'}>
                            <div className={'id txt'}>{user.id}.</div>
                            <div className={'email txt'}>{user.email}</div>
                            <div className={'group txt'}>{user.group}</div>
                        <div className={'btn_group'}>
                            <button className={"btn btn-danger"} onClick={this.delete}>Delete</button>
                            <button className={"btn btn-secondary"} onClick={this.showEditUser}>Edit</button>
                        </div>
                    </div>
                )}
                {flag && (<EditUser user={user} id={user.id} key={user.id}/>)}
                {flag && (<button onClick={this.showEditUser} className={"btn btn-secondary width"}>Back</button>)}
                <hr/>
            </div>

        );
    }

}

export default UserComponent;