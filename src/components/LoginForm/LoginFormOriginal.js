import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Field, reduxForm, initialize } from 'redux-form';
import {connect} from 'react-redux';
// import {startUserLogin} from '../../actions/auth';

 class LoginForm extends React.Component {
   constructor(props) {
     super(props)
   }



  renderInputField = (field) => {
    // console.log(field);
    return (
      <FormGroup  >
          <Label>{field.myLabel}</Label>
          <Input 
            type={field.type}
            placeholder={field.myPlaceholder}
            {...field.input}
          />
        </FormGroup>
    );
  }
  render() {
    
    return (
      <div>
        {/* <style>
          {`
            @media (min-width: '1200px')
            .container {
                max-width: '1140px';
            }
            @media (min-width: 992px)
            .container {
                
            }
            @media (min-width: 768px)
            .container {
                
            }
            @media (min-width: 576px)
            .container {
                max-width: 540px;
            `}
          {
            `.form-control {
              display: block;
              width: 100%;
              padding: .375rem .75rem;
              font-size: 1rem;
              line-height: 1.5;
              color: #495057;
              background-color: #fff;
              background-clip: padding-box;
              border: 1px solid #ced4da;
              border-radius: .25rem;
              -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
              transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
              -o-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
          },
          @media (max-width: 992px)
            .form-control {
              width: 50%
            }
          
          `
          }

        </style> */}
      <Container className="container" style={{alignItems: 'center', alignContent: 'center', alignSelf: 'center'}}>
          <Form  
            onSubmit={this.props.handleSubmit}
          >
          <Field
            myPlaceholder="jon@zeenah.com"
            // myLabel="email"
            name="email"
            component={this.renderInputField}
            type="text"
          />
          <Field
            myPlaceholder="password"
            // myLabel="Password"
            name="password"
            component={this.renderInputField}
            type="password"
          />
           
            <Button>Submit</Button>
          </Form>
      </Container>
      </div>
    );
  }
}

const validate = (values) => {
  console.log(values);
};

export default reduxForm({
  validate,
  form: 'auth',
  initialize
})(connect()(LoginForm));