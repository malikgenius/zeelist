import React, { Component } from 'react';
import {connect} from 'react-redux';

// import SelectedEmployees from '../../selectors/employees';
import ListView from './ListView';
import FooterPage from '../Main/FooterPage';


class ListHome extends Component {

    render() {
        return(
            <div>
                <ListView  employees={this.props.employees}/>
                <FooterPage />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    employees: state.employees
    // filter: state.filter
    };
  };
  export default connect(mapStateToProps)(ListHome);

