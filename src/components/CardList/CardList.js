/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';
import DisplayedRecordAlert from './DisplayedRecordAlert';
// import LottieControl from './react-lottie';
// import PopOver from '../PopOver';
// import CarouselMain from './Carousel1';
// import './Layout.css';

// import EmployeeList from '../zeenah_employees.json';

const CardList = ({ employees }) => {
    // console.log(employees);
    // const SortedEmployees = _.sortBy(employees, ['type', 'name']);
    // var SortedEmployees = _.orderBy(employees, ['type','name'], ['desc', 'asc']);
    // eslint-disable-next-line
    const Employees = employees.map((person) => {
      if(person) {
        return (
          <Col sm="3" key={person.id}>  <PeopleCard   employee={person}/></Col>
        );
      }
    });
      return (

        <div>
          {/* <NavbarToggle /> */}
          {/* <div><DisplayedRecordAlert>{employees.length !== 0? employees.length: <LottieControl />} </DisplayedRecordAlert></div> */}
          <div><DisplayedRecordAlert>{employees.length} </DisplayedRecordAlert></div>
            <Container >
              <Row style={{border: 1}}  >
                  {Employees}
            </Row>
            </Container>
      </div>
    
    );
  };

  export default CardList;