import React, { PureComponent } from 'react'

export default class FormComponent extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleUserName = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleEmail = e => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit=(e)=>{
        alert(`UserName :${this.state.username} Email Id: ${this.state.email} Password:${this.state.password}`)
        e.preventDefault();
        console.log(`UserName :${this.state.username} Email Id: ${this.state.email} Password:${this.state.password}`);
        
    }

    render() {
        const { username, email, password } = this.state;
        return (
            <div>
                <div>
                    <header>FormComponent</header>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName:</label>
                        <input
                            type='text'
                            value={username}
                            onChange={this.handleUserName}
                        />
                    </div>
                    <div>
                        <label>Email Id:</label>
                        <input
                            type='email'
                            value={email}
                            onChange={this.handleEmail}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type='password'
                            value={password}
                            onChange={this.handlePassword}
                        />
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
