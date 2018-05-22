import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, Popup } from 'semantic-ui-react';
import { startLogout } from '../../actions/auth';
import {
  CardImg,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

class NavbarToggle2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      tooltipOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  ToolTip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand> 
            <Link to="/"><CardImg style={{width: 150}} src={"/assets/zeenahlogo.svg"} /></Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink>
                    <Link to="/">
                    <Popup
                      trigger={<Icon name="home" size="large" color="grey"/>}
                      content='Cardlist'
                    />
                      
                    </Link> 
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                    <Link to="/listview">
                    <Popup
                      trigger={<Icon name="list ul" size="large" color="grey"/>}
                      content='list'
                    />
                      
                    </Link> 
                </NavLink>
              </NavItem>

               <NavItem>
                <NavLink>
                    
                    <Link to="/birthday">
                    {/* <CardImg style={{width:30}} src={"/assets/birthday.svg"} /> */}
                    <Popup
                      trigger={<Icon name="birthday" color="red" size="large" />}
                      content='birthdays list'
                    />
                    {/* <Icon name="birthday" color="red" size="large" /> */}
                    
                    </Link> 
                </NavLink>
              </NavItem>

                <NavItem>
                    {
                        this.props.isAuthenticated ? 
                            <NavLink>
                                <Link to="/addemployee"> 
                                <Popup
                                  trigger={<Icon name="add user" size="large" color="grey"/> }
                                  content='add employees'
                                />
                                    
                                </Link>
                            </NavLink> 
                            :
                    ''}
                </NavItem>

              <NavItem>
                <NavLink >
                    {
                        this.props.isAuthenticated ? 
                            <div onClick={this.props.startLogout} style={{cursor: 'pointer'}}>
                              <Popup
                                  trigger={<Icon name="user outline" size="large" /> }
                                  content='logout'
                              />
                              
                            </div>        
                        :
                        <Link to="/login">
                             <Popup
                                  trigger={<Icon name="user" size="large" color="grey"/> }
                                  content='login'
                              />
                            
                            {/* <div style={{textDecoration: 'none'}}><CardImg style={{width:20}} src={"/assets/login.svg"} /></div> */}
                            
                        </Link>
                    }
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });
  
  const mapStateToProps = (state) => ({
    //!! is boolean true or false
    isAuthenticated: !!state.auth.uid
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavbarToggle2);