import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    // console.log(props)
    return (

    
        <Route {...rest} 
            render={(props) => (
            isAuthenticated ? 
                <Component {...props}/>
             : 
            <Redirect to={{pathname: '/login'}} />
            
        )} />
    
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);