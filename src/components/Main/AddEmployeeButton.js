import React from 'react';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom';

class AddEmployeeButton extends React.Component {
  render() {
    return (
      <div>
        <div>
        
            <Link to="/">
                <Button variant="fab"  
                    style={{backgroundColor: '#17a2b8', padding: 0, fontWeight: 500, marginRight: 10}}
                    color="primary" >list
                </Button> 
            </Link>
              <Link to="/addemployee"> <Button variant="fab" >+</Button></Link>
              
          {/* <Button variant="fab">+</Button>
          <Button variant="fab" color="primary">+</Button>
          <Button variant="fab" color="danger">+</Button>
          <Button variant="fab" color="accent">+</Button> */}
        </div>
        {/* <div>
          <Button variant="fab" disabled={true}>+</Button>
          <Button variant="fab" color="primary" disabled={true}>+</Button>
          <Button variant="fab" color="danger" disabled={true}>+</Button>
          <Button variant="fab" color="accent" disabled={true}>+</Button>
        </div> */}
      </div>
    );
  }
}

export default AddEmployeeButton;