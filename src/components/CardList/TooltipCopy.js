import React from 'react';
import { Tooltip } from 'reactstrap';

export default class TooltipCopy extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <a style={{textDecoration: 'none', color: '#117a8b'}}href={`tel:${this.props.phone}`} id="DisabledAutoHideExample">{this.props.phone}</a>
        {/* <a href="#" id="DisabledAutoHideExample">tooltip</a> */}
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
          Try to select this text!
        </Tooltip>
      </div>
    );
  }
}