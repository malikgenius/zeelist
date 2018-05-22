import React from 'react';
import { Alert } from 'reactstrap';
import { Badge } from 'reactstrap';


const DisplayAlert = (employees) => {
  return (              
      <Alert color="light" >
         <h3>
             
             {employees.children[0] === 0 ? 
                <div>
                    <span style={{fontSize: 16, marginRight: 10,}}>Total Listed Employees </span>
                    <Badge color="danger">{employees.children}</Badge>
                </div> 
                :  
                <div>
                    <span style={{fontSize: 16, marginRight: 10, }}>Total Listed Employees</span>
                    <Badge color="info">{employees.children}</Badge>
                </div> }
                {/* <span style={{fontSize: 16, marginRight: 10}}>Displayed Employees records</span> */}
             {/* {employees.children[0] === 0 ? <p> sorry no records </p> : employees.children} */}
             {/* <LottieControl /> */}
            
        </h3>
      </Alert>
  );
};

export default DisplayAlert;