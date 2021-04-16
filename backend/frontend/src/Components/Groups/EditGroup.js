import React, {Component} from 'react';
import {GroupServices} from "../../Services/GroupServices";
import '../style.css'

class EditGroup extends Component {
    constructor(props) {
        super(props);
        this.state.inputName = props.group.name
        this.state.inputDescription = props.group.description
    }

    GroupServices = new GroupServices()
    state = {
        inputName: '',
        inputDescription: '',
        nameResponse: '',
        descriptionResponse: '',
    }

    edit() {
        this.GroupServices.EditGroup(this.props.id, this.state.inputName, this.state.inputDescription)
            .then(value => value.json()).then(value => this.setState({
            nameResponse: value.name ? value.name : '',
            descriptionResponse: value.description ? value.description : ''
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        let {nameResponse, descriptionResponse, inputName,inputDescription} = this.state
        if (inputName) {
            if (nameResponse === inputName) {
                nameResponse = ''
                descriptionResponse = ''
                window.location.reload()
            }
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={inputName} className="form-control" placeholder={'Group name'}
                           onChange={({target: {value}}) => this.setState({inputName: value})} type="text"/>
                    <span className={'response'}>{nameResponse}</span> <br/>
                    <textarea value={inputDescription} className="form-control" placeholder={'description'}
                              onChange={({target: {value}}) => this.setState({inputDescription: value})}/>
                    <span className={'response'}>{descriptionResponse}</span> <br/>
                    <button className="btn btn-warning width" onClick={() => this.edit()}>Confirm
                    </button>
                </form>
            </div>
        );
    }
}

export default EditGroup;