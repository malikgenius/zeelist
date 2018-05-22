/* eslint react/prop-types: 0 */
import React from 'react';
import _ from 'lodash';
// eslint-disable-next-line
import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';
// eslint-disable-next-line
import { Badge } from 'reactstrap';
import DisplayAlert from './DisplayAlert';
import ListItemEmployee from './ListItemEmployee';
import ListItemManagement from './ListItemManagement';
// eslint-disable-next-line
import IT from './DepartmentsLists/IT';

const ListView = ({ employees }) => {
    let SortedEmployees = _.orderBy(employees, ['person', 'name'], ['desc', 'asc']);
    let SortedManagement = _.orderBy(employees, ['person','name '], ['desc', 'asc']);
    // eslint-disable-next-line
    const Management = SortedManagement.map((person) => {
      if(person.department.toLowerCase() === 'management') {
        return (
          <div key={person.id}>
           <ListItemManagement key={person.id} employee={person}/>
          </div>
        );
      } 
    });
    // eslint-disable-next-line
    const AdminEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'administration') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const ClientServicesEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'client services') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const DesignEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'design') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const DigitalEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'digital') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const EventsEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'events') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const HumanEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'human resources') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const MediaEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'media') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const ProductionEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'production') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const ContentEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'content') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const FinanceEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() === 'finance') {
        return (
          <div key={person.id}>
           <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      } 
    });
// eslint-disable-next-line
    const ITEmployees = SortedEmployees.map((person) => {
      if(person.department.toLowerCase() ===  'information technology') {
        return (
          <div key={person.id}>
            <ListItemEmployee key={person.id} employee={person}/>
          </div>
        );
      }
    });


    
   

      return (
        // <div > { employees.length !== 0? }

        <div>
          {/* <div><DisplayedRecordAlert>{employees.length !== 0? employees.length: <LottieControl />} </DisplayedRecordAlert></div> */}
          
            <Container >
            
            <DisplayAlert >{employees.length} </DisplayAlert>
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Management</Alert>
                  {Management}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Administration</Alert>
                  {AdminEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Client Services</Alert>
                  {ClientServicesEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Content</Alert>
                  {ContentEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Design</Alert>
                  {DesignEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Digital</Alert>
                  {DigitalEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Events</Alert>
                  {EventsEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Finance Department</Alert>
                  {FinanceEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Human Resources</Alert>
                  {HumanEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>IT Department</Alert>
                  {ITEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Media</Alert>
                  {MediaEmployees}
            <Alert color="secondary" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Production</Alert>
                  {ProductionEmployees}
            </Container>
      </div>
    
    );
  };

  export default ListView;