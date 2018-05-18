import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Badge } from 'reactstrap';
import ToggleButton from './ToggleButton';

const ListView = (props) => {
    console.log(props);
    return (
      <div>      
        <ListGroup>
            <Row>
                <ListGroupItem  tag="a" href="#" action>
                    <ListGroupItemHeading>{props.employee.name}</ListGroupItemHeading>
                    <ListGroupItemText>
                    <a href="mailto:{props.employee.email}" />
                    </ListGroupItemText>
                    <Badge pill>
                    <ListGroupItemText >
                    <a href="tel:{props.employee.phone}" />
                    {/* <ToggleButton {...props}/> */}
                    <p style={{textDecoration: 'none', color: 'white'}}>{props.employee.phone}</p>
                    
                    </ListGroupItemText>
                    
                    </Badge>
                </ListGroupItem>
            </Row>
        </ListGroup>
      </div>
    );
  };

  export default ListView;
