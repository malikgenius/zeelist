/* eslint react/prop-types: 0 */
import React from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  // eslint-disable-next-line
  DropdownToggle,
  // eslint-disable-next-line
  DropdownMenu,
  // eslint-disable-next-line
  DropdownItem
 } from 'reactstrap';
 import { DateRangePicker } from 'react-dates';
 import './SearchBar.css';
 import { setStartDate, setEndDate } from '../../actions/filterAction';
 import {connect} from 'react-redux';

 class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      calendarFocused: null,
      // search: props.filters.text
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

  onDatesChange = ({startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => {
    // if (!this.state.calendarFocused) {
      this.setState(() => ({ calendarFocused }));
    // } 
    
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
            // value={this.props.filters.text}
            
          />
          <InputGroupButtonDropdown 
            addonType="append" 
            isOpen={this.state.dropdownOpen} 
            toggle={this.toggleDropDown}
            
          
          >
           
          </InputGroupButtonDropdown>
          <DateRangePicker
              startDateId="startdate"
              endDateId="enddate"
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}

          />
        </InputGroup>
        
      </div>
      <div>
      
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