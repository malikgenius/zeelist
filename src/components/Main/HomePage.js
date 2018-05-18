/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import CardList from '../CardList/CardList';
import { connect } from 'react-redux';
import {startSetEmployees} from '../../actions/addEmployeeAction';
import {setTextFilter, sortBy} from '../../actions/filterAction';
import SelectedEmployees from '../../selectors/employees';
import FooterPage from './FooterPage';

// import NavbarToggle from './NavbarToggle';

// import AddEmployeeButton from './AddEmployeeButton';

 
class HomePage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        // employees: this.props.employees,
        searchfield: '',
        button: false
      };
      console.log(props)
    }

    onSearchChange = (event) => {
      const searchfield = event.target.value;
      this.props.setTextFilter(searchfield);
      // this.setState({ searchfield });
    }

    onSortByChange = (e) => {
      const sortValue = e.target.value;
      this.props.sortBy(sortValue);
    }

    
    render() {

      return (
        <div >
          
          <div className="container">
          {/* <NavbarToggle userid={this.props.user}/> */}
          <SearchBar searchchange={this.onSearchChange} sortByChange={this.onSortByChange}/>
          
          <div ><CardList employees={this.props.employees}/></div>
          {/* {this.props.employees ? <div ><CardList employees={this.props.employees}/></div> : 'wait a min...'} */}

          </div>
          <FooterPage />
        </div>
      );
    }
  }
  

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     onLoadEmployees: () => {dispatch(startSetEmployees)},
  //     onSearchChange: () => {dispatch(setTextFilter)}
  //   };
  // };

  const mapStateToProps = (state) => {
    return {
    employees: SelectedEmployees(state.employees, state.filters),
    user: state.auth,
    // filter: state.filter
    };
  };
  export default connect(mapStateToProps, {startSetEmployees, setTextFilter, sortBy})(HomePage);
  // export default HomePage;