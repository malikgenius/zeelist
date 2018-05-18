/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { startLogin } from '../../actions/auth';
import LoginForm from './LoginForm';
import FooterPage from '../Main/FooterPage';


export class LoginPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            values: {}
        };
    }
    
    Submit = (values) => {
        console.log(values);
        this.props.startLogin(values);
        this.props.history.push('/');
    }
    render() {
        // console.log(`this is HOC state ${this.state.values}`);
        return (
            <div className="container">
                <div>
                    <Alert color="light" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Admin Login</Alert>
                </div>
            
                <div style={{alignItems: 'center', alignContent: 'center', alignSelf: 'center'}}>
                    <LoginForm onSubmit={this.Submit}  />
                </div>
                
        </div>
        );
    }
}
    // const mapDispatchToProps = (dispatch) => ({
    // startAddEmployee: (values) => dispatch(startLogin(values))
    // });

export default connect(null, {startLogin})(LoginPage);