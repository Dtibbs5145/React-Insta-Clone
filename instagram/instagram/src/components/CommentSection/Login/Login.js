import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const LoginForm = styled.div`
    width: 500px;
    background: gray;
    border-radius: 6px;
    margin: 10px auto;
    padding: 10px 25px;
    `;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload()
    }

    render() {
        return (
            <LoginForm>
                <Form className='login-form'>
                    <h3>React Insta Clone!</h3>
                    <div>Login</div>
                    <FormGroup>
                        <Input
                            type='text'
                            placeholder='UserName'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <Button color='success' size='large' onClick={this.handleLoginSubmit}>
                            Log In
                        </Button>
                    </FormGroup>
                </Form>
            </LoginForm>
        );

    }
}

export default Login;