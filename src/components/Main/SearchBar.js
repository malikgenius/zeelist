/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Button,
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
 import './SearchBar.css';
 import {connect} from 'react-redux';

 class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
console.log(props)
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      search: ''
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }
  // onSearchChange = (event) => {
  //   this.setState({
  //     search:event.target.value
  //   });

  //   console.log(this.state.search)
  // }
  render() {
    return (
        <div>
           
        
      <div style={{marginTop: 50}}>
      
        <InputGroup>
          <Input 
            placeholder="search employee"
            onChange={this.props.searchchange}
            // value={this.state.search}
            
          />
          
          <InputGroupButtonDropdown 
            addonType="append" 
            isOpen={this.state.dropdownOpen} 
            toggle={this.toggleDropDown}
          >
            <DropdownToggle caret>
              
              SortedBy {this.props.filters.sortBy.charAt(0).toUpperCase() + this.props.filters.sortBy.slice(1)}
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem value="name" onClick={this.props.sortByChange}>
                Name
              </DropdownItem>
              <DropdownItem value="department" onClick={this.props.sortByChange}>Department</DropdownItem>
              <DropdownItem value="" onClick={this.props.searchchange}>All Employees</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </div>
      </div>
    );
  }
};


const mapStateToProps = state => {
  return {
  filters: state.filters
  };
};

export default connect(mapStateToProps)(SearchBar);
// export default SearchBar;