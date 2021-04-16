import React, {Component} from 'react';
import {UserServices} from "../../Services/UserServices";
import {GroupServices} from "../../Services/GroupServices";
import '../style.css'

class EditUser extends Component {
    GroupService = new GroupServices()

    constructor(props) {
        super(props);
        this.state.inputName = props.user.name
        this.state.inputAge = props.user.age
        this.state.inputEmail = props.user.email
    }

    UserService = new UserServices()
    state = {
        inputName: '',
        inputAge: '',
        inputEmail: '',
        nameResponse: '',
        ageResponse: '',
        emailResponse: '',
        groups: [],
        chosenGroup: ''
    }

    edit() {
        this.UserService.EditUser(this.props.id,
            this.state.inputName,
            this.state.inputAge,
            this.state.inputEmail,
            this.state.chosenGroup
        )
            .then(value => value.json()).then(value => this.setState({
            nameResponse: value.name ? value.name : '',
            ageResponse: value.age ? value.age : '',
            emailResponse: value.email ? value.email : ''
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        let {nameResponse, ageResponse, emailResponse, inputName, inputAge, inputEmail, groups} = this.state
        if (inputEmail) {
            if (emailResponse === inputEmail) {
                nameResponse = ''
                ageResponse = ''
                emailResponse = ''
                window.location.reload()
            }
        }
        return (
            <div className="flex-wrapper">
                <form name={'Form'} onSubmit={this.handleSubmit}>
                    <input value={inputName} className="form-control" placeholder={'name'}
                           onChange={({target: {value}}) => this.setState({inputName: value})} type="text"/>
                    <span className={'response'}>{nameResponse}</span><br/>
                    <input value={inputAge} className="form-control" placeholder={'age'}
                           onChange={({target: {value}}) => this.setState({inputAge: value})} type="number"/>
                    <span className={'response'}>{ageResponse}</span><br/>
                    <input value={inputEmail} className="form-control" placeholder={'email'}
                           onChange={({target: {value}}) => this.setState({inputEmail: value})} type="email"/>
                    <span className={'response'}>{emailResponse}</span><br/>
                    <select name="groups" className="form-control" onChange={(e) => {
                        this.setState({chosenGroup: e.target.value})
                    }}>
                        <option value="">Choose group</option>
                        {groups.map(group => <option key={group.id} value={group.id}>{group.name} Group</option>)}
                    </select> <br/>
                    <button className={"btn btn-warning width"} onClick={() => this.edit()}>Confirm
                    </button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.GroupService.getAllGroups().then(groups => this.setState({groups: groups}))
    }
}

export default EditUser;