import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CollapseButton extends Component {
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
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>More</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{color: 'black', backgroundColor: '#e9ecef', border: 'none'}}>
            <CardBody >
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CollapseButton;