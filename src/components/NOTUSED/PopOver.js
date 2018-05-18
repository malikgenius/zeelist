import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Flag from 'react-world-flags';

export default class PopOver extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div className="container">
          
        {/* <Button id="Popover1" > */}
        <Flag style={{cursor: 'pointer'}}code="PK" height="50" onMouseOver={this.toggle} onMouseOut={this.toggle} id="Popover1"/>
        {/* </Button> */}
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Pakistan</PopoverHeader>
          <PopoverBody>Asian country Republic of Pakistan</PopoverBody>
        </Popover>
      </div>
    );
  }
}

