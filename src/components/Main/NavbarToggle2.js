import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Icon, Popup } from "semantic-ui-react";
import { startLogout } from "../../actions/auth";
import { startSetFile } from "../../actions/addExcelList";
import {
  CardImg,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavbarToggle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileURL: ""
    };

    // console.log(this.props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      tooltipOpen: false
    };
  }

  componentDidMount = () => {
    this.props.startSetFile().then(() => {
      const fileURL = this.props.file.fileURL;
      this.setState({
        fileURL
      });
      console.log(this.state.fileURL);
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  ToolTip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand>
            <Link to="/">
              <CardImg style={{ width: 150 }} src={"/assets/zeenahlogo.svg"} />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">
                    <Popup
                      trigger={<Icon name="home" size="large" color="grey" />}
                      content="Cardlist"
                    />
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link to="/listview">
                    <Popup
                      trigger={
                        <Icon name="list ul" size="large" color="grey" />
                      }
                      content="list"
                    />
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <a href={this.props.file.fileURL} download target="_blank">
                    <Popup
                      trigger={
                        <Icon name="download" size="large" color="grey" />
                      }
                      content="Download Employee List"
                    />
                  </a>
                  {/* <Link to="/download">
                    <Popup
                      trigger={
                        <Icon name="download" size="large" color="grey" />
                      }
                      content="Download Employee List"
                    />
                  </Link> */}
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link to="/birthday">
                    {/* <CardImg style={{width:30}} src={"/assets/birthday.svg"} /> */}
                    <Popup
                      trigger={
                        <Icon name="birthday" color="red" size="large" />
                      }
                      content="birthdays list"
                    />
                    {/* <Icon name="birthday" color="red" size="large" /> */}
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                {this.props.isAuthenticated ? (
                  <NavLink>
                    <Link to="/fileupload">
                      <Popup
                        trigger={
                          <Icon name="upload" size="large" color="grey" />
                        }
                        content="Upload Excel file"
                      />
                    </Link>
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>

              <NavItem>
                {this.props.isAuthenticated ? (
                  <NavLink>
                    <Link to="/addemployee">
                      <Popup
                        trigger={
                          <Icon name="add user" size="large" color="grey" />
                        }
                        content="add employees"
                      />
                    </Link>
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>
              <NavItem>
                <NavLink>
                  {this.props.isAuthenticated ? (
                    <div
                      onClick={this.props.startLogout}
                      style={{ cursor: "pointer" }}
                    >
                      <Popup
                        trigger={<Icon name="user outline" size="large" />}
                        content="logout"
                      />
                    </div>
                  ) : (
                    <Link to="/login">
                      <Popup
                        trigger={<Icon name="user" size="large" color="grey" />}
                        content="login"
                      />

                      {/* <div style={{textDecoration: 'none'}}><CardImg style={{width:20}} src={"/assets/login.svg"} /></div> */}
                    </Link>
                  )}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
  startSetFile: () => dispatch(startSetFile())
});

const mapStateToProps = state => ({
  //!! is boolean true or false
  isAuthenticated: !!state.auth.uid,
  file: state.file
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarToggle2);
