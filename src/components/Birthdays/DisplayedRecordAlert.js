import React from 'react';
import { Alert } from 'reactstrap';
import { Badge } from 'reactstrap';
import LottieControl from '.././CardList/react-lottie';

const DisplayedRecordAlert = (employees) => {
  return (              
      <Alert color="light" >
         <h3>
             
             {employees.children[0] === 0 ? 
                <div>
                    <span style={{fontSize: 16, marginRight: 10}}>Currently showing records</span>
                    <Badge color="danger">{employees.children}</Badge>
                    <LottieControl style={{border: 1}}/>
                </div> 
                :  
                <div>
                    <span style={{fontSize: 16, marginRight: 10}}>Currently showing records</span>
                    <Badge color="info">{employees.children}</Badge>
                </div> }
                {/* <span style={{fontSize: 16, marginRight: 10}}>Displayed Employees records</span> */}
             {/* {employees.children[0] === 0 ? <p> sorry no records </p> : employees.children} */}
             {/* <LottieControl /> */}
            
        </h3>
      </Alert>
  );
};

export default DisplayedRecordAlert;