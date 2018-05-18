import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CardList from './CardList/CardList';
import PeopleCard from './CardList/PeopleCard';
import ListView from './ListView';

export default class TabList extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    let Employees = this.props.employees.map((person) => {
        if(person) {
          return (
            <Col sm="3" key={person.id}>  <PeopleCard   employee={person}/></Col>
          );
        }
        
      });

      let EmployeesList = this.props.employees.map((person) => {
        if(person) {
          return (
            <Col sm="6" key={person.id}>  <ListView  employee={person}/></Col>
          );
        } 
      });

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Card View
              
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              List View
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              
              {Employees}
              {/* <CardList employees={this.props.employees}/> */}
              
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              
              {EmployeesList}
              {/* <CardList employees={this.props.employees}/> */}
              
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}