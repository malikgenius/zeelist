import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, CardImg, Button } from 'reactstrap';
// import Button from 'muicss/lib/react/button';
import { connect } from 'react-redux';
import {startLogout} from '../../actions/auth';
// import './CardImage.css';

class NavbarToggle extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>

        <style>
          {
            `.btn-outline-secondary {
              color: #6c757d;
              background-color: transparent;
              background-image: none;
              border-color: none;
          }`
          }
        </style>
        <Navbar light>
          <NavbarBrand  className="mr-auto">
            <Link to="/"><CardImg style={{width: 150}} src={"/assets/zeenahlogo.jpg"} /></Link>
           {/* <NavLink href="/"> <CardImg style={{width: 150}} src={"/assets/zeenahlogo.jpg"} /></NavLink> */}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav >
              <NavItem>
                <NavLink>
                  <Link to="/listview">
                      <Button outline color="secondary" style={{borderColor: 'white'}}>
                          List View
                      </Button>      
                  </Link>
                </NavLink>
                </NavItem>
               
                <NavItem>
                <NavLink >
                  
                    {this.props.auth.uid ? 
                    (<Button outline color="secondary" onClick={this.props.startLogout} style={{borderColor: 'white', padding: 'none'}}>
                      Logout
                    </Button>)
                    :
                    (<Link to="/login"> <Button outline color="secondary" style={{borderColor: 'white', padding: 'none'}}> 
                      Login
                    </Button> 
                    </Link>)}
                    
                </NavLink>
                {/* <Button variant="fab" onClick={this.props.startLogout} >Logout</Button> */}
              </NavItem>

               <NavItem>
                {this.props.auth.uid ? <NavLink>
                  <Link to="/addemployee"> 
                    <Button outline color="secondary" style={{borderColor: 'white', padding: 'none'}}>
                         Add Employee
                    </Button>      
                  </Link>
                </NavLink> : ''}
                </NavItem>

            </Nav>
          </Collapse>
          
        </Navbar>
        {/* <NavItem>
              <Link to="/listview">
                <Button variant="fab"
                    style={{backgroundColor: '#17a2b8', padding: 0, fontWeight: 500, marginRight: 10}}
                    color="primary" >list
                </Button>
                </Link>
                <Link to="/addemployee"> <Button variant="fab" >+</Button></Link>
              </NavItem> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarToggle);