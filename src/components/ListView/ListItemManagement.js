import React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

 const ListItems = (props) => {
   
  
    console.log(props);
    return (
      <div>
      <Alert color="light">
        <Row 
            // style={{border: '1px solid gray'}} 
            key={props.employee.id}>  
            <Col sm="3" style={{fontWeight: 500}}>  {props.employee.name}</Col>
            <Col sm="3"> {props.employee.position}</Col>
            <Col sm="2">  {props.employee.phone}</Col>
            <Col sm="1">  {props.employee.extension}</Col>
            <Col sm="3" style={{textAlign: 'right'}}>
                <a style={{textDecoration: 'none', color: '#117a8b', fontWeight: 400}}href={`mailto:${props.employee.email}`}>{props.employee.email}</a>
            </Col>
            
        </Row>
      </Alert>
      </div>
    );

}

export default ListItems;


