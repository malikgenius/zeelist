import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import SelectedEmployees from '../../selectors/birthdays';
import {sortBy, setTextFilter} from '../../actions/filterAction';
import FooterPage from '../Main/FooterPage';
import BirthdayList from './BirthdayList';


class BirthDayHome extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            searchfield: ''
        }
        console.log(props);
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

            <div>
                <div className="container">
                    <SearchBar 
                        searchchange={this.onSearchChange}
                        SortByChange={this.onSortByChange}
                    />
                    <BirthdayList birthdays={this.props.birthdays}/>
                </div> 
                <div>
                    <FooterPage />
                </div>
            </div>

          )
      }

}

const mapStateToProps = (state) => {
    return {
        birthdays: SelectedEmployees(state.employees, state.filters)
    };
};

export default connect(mapStateToProps, {setTextFilter, sortBy})(BirthDayHome);