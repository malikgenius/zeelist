/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import CardList from '../CardList/CardList';
import { connect } from 'react-redux';
import { firebase } from '../../firebase/firebase';
import {startSetEmployees} from '../../actions/addEmployeeAction';



class HomePage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        employees: this.props.employees,
        searchfield: ''
      };
      console.log(props);
    }

    // componentDidMount = () => {
    //   // this.props.dispatch(startSetEmployees());
    //   firebase.database().ref('/employees').once('value').then((snapshot) => {
    //     const employees = [];
    //     snapshot.forEach((childSnapShot) => {
    //       employees.push({
    //         id: childSnapShot.key,
    //         ...childSnapShot.val()
    //       });
    //     });
    //     this.props.dispatch(startSetEmployees(employees))
    //     this.setState({ employees});
      
    //   });

    // }

    onSearchChange = (event) => {
      const searchfield = event.target.value;
      this.setState({ searchfield });
    }
    render() {

      
      // console.log(this.props.employee);
      // console.log(this.state.employees)
      // console.log(this.state.employees);
        // javascript filter way, with local state which came from redux
        // const filteredEmployees = this.props.employees.filter((employee) => {
          // lodash filter way .. directly from redux mapStateToProps

          const filteredEmployees = _.filter(this.props.employees,employee => {
          return (
            employee.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            employee.email.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            employee.phone.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            employee.extension.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            employee.gender.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            employee.hod.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            employee.department.toLowerCase().includes(this.state.searchfield.toLowerCase())
            // Object.keys(employee).reduce((o, key) => {
            //   employee[key].toLowerCase().includes(this.state.searchfield.toLowerCase());
            // })
            );
        });
        

      return (
        <div >
          {/* <NavbarToggle /> */}
          {/* <JumboTron searchchange={this.onSearchChange}/> */}
          {/* <CarouselMain /> */}
          {/* <Carousel2 /> */}
          <div className="container">
          <SearchBar searchchange={this.onSearchChange}/>
          {/* <div ><TabList employees={filteredEmployees}/></div> */}
          {/* <div ><CardList employees={this.props.employees}/></div> */}
          {/* <div ><CardList employees={this.props.employees ? filteredEmployees : ''}/></div> */}
          <div ><CardList employees={filteredEmployees}/></div>
          
          
            
            
            {/* <SearchBar /> */}
            {/* <Layout /> */}
            {/* <Header /> */}
            {/* <HeaderNav /> */}
            {/* <Flag code="PK" height="50"/> */}
            {/* <PopOver /> */}
          </div>
          
        </div>
      );
    }
  }
  


  const mapStateToProps = (state) => {
   return { 
     employees:  state.employees,
    };
  };
  export default connect(mapStateToProps)(HomePage);