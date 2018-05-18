import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
      
    return (
        <div>
        {/* <style> {
            `.card card {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: column;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-clip: border-box;
          border-radius: .25rem;
      }`
  }
      </style> */}
      
        <Button color="primary" onClick={this.toggle} >More</Button>
        <Collapse  isOpen={this.state.collapse}>
          <Card style={{border: 'none'}}>
            <CardBody >
                <p>Contact: {this.props.employee.phone}</p>
                <p>extention: {this.props.employee.ext}</p>
            
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ToggleButton;