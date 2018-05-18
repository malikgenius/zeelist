import React from 'react';
import { Alert } from 'reactstrap';
import { Badge } from 'reactstrap';


const DisplayAlert = (employees) => {
    console.log(employees)
  return (              
      <Alert color="light" style={{justifyContent: 'center'}}>
         <h3>
            <div>
            <Alert color="info" style={{textAlign: 'center', fontWeight: 500, fontSize: '40'}}>Admin Login</Alert>
            </div>
             
             {/* {employees.children[0] === 0 ? 
                <div>
                    <span style={{fontSize: 16, marginRight: 10,}}>Admin Login </span>
                    <Badge color="danger">{employees.children}</Badge>
                </div> 
                :  
                <div>
                    <span style={{fontSize: 16, marginRight: 10, }}>Admin Login</span>
                    <Badge color="info">{employees.children}</Badge>
                </div> } */}
                {/* <span style={{fontSize: 16, marginRight: 10}}>Displayed Employees records</span> */}
             {/* {employees.children[0] === 0 ? <p> sorry no records </p> : employees.children} */}
             {/* <LottieControl /> */}
            
        </h3>
      </Alert>
  );
};

export default DisplayAlert;