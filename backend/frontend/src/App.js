import React, {Component} from 'react';
import AllUsers from "./Main/AllUsers";
import AllGroups from "./Main/AllGroups";
import './App.css'

class App extends Component {
    state = {showUsers: true, showGroups: false}
    showUsers = () => {
        this.setState({showGroups: false})
        this.setState({showUsers: true})
    }
    showGroups = () => {
        this.setState({showUsers: false})
        this.setState({showGroups: true})
    }

    render() {
        let {showUsers, showGroups} = this.state
        return (
            <div className={'main'}>
                <div className={'links'}>
                    <button onClick={this.showUsers} className={'btn btn-link link'}>
                        users
                    </button>
                    <button onClick={this.showGroups} className={'btn btn-link link'}>
                        groups
                    </button>
                </div>
                <div className={'app-route'}>
                    {showUsers && <AllUsers/>}
                    {showGroups && <AllGroups/>}
                </div>
            </div>
        );
    }
}

export default App;