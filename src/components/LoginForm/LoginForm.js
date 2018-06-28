import React from "react";
// import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Container } from "reactstrap";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
// import {startUserLogin} from '../../actions/auth';

class LoginForm extends React.Component {
  renderInputField = field => {
    // console.log(field);
    return (
      <div>
        <legend>{field.myLabel}</legend>
        <Input
          type={field.type}
          placeholder={field.myPlaceholder}
          {...field.input}
        />
        <p style={{ color: "red", fontSize: 10 }}>
          {field.meta.touched && field.meta.error}
        </p>
      </div>
    );
  };
  render() {
    return (
      <div>
        <Container
          className="container"
          style={{
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center"
          }}
        >
          <Form onSubmit={this.props.handleSubmit}>
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

const validate = values => {
  const errors = {};

  // const email = value =>
  // value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  // 'Invalid email address' : undefined

  if (!values.email) {
    errors.email = "You must provide Email";
  } else if (!/^[A-Z0-9._%+-]+@zeenah+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "You must provide password to login";
  } else if (values.password.length < 6) {
    errors.password = "Too short ";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "auth",
  fields: ["email", "password"],
  initialize
})(connect()(LoginForm));
