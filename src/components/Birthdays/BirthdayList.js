/* eslint react/prop-types: 0 */
import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import BirthdayListItems from './BirthdayListItems';
import DisplayedRecordAlert from './DisplayedRecordAlert';


const BirthdayList = ({ birthdays }) => {
    // const SortedEmployees = _.sortBy(employees, ['type', 'name']);
    // var SortedEmployees = _.orderBy(employees, ['type','name'], ['desc', 'asc']);
    const Employees = birthdays.map((person) => {
      if(person) {
        return (
          <Col sm="12" key={person.id}>  <BirthdayListItems   employee={person}/></Col>
        );
      }
    });
      return (
        // <div > { employees.length !== 0? }

        <div>
          {/* <NavbarToggle /> */}
          {/* <div><DisplayedRecordAlert>{employees.length !== 0? employees.length: <LottieControl />} </DisplayedRecordAlert></div> */}
          {/* <div><DisplayedRecordAlert>{employees.length} </DisplayedRecordAlert></div> */}
            <Container className="container" style={{marginTop: 10}}>
            <div><DisplayedRecordAlert>{birthdays.length} </DisplayedRecordAlert></div>
              <Row style={{border: 1}}  >
                  {Employees}
            </Row>
            </Container>
      </div>
    
    );
  };

  export default BirthdayList;