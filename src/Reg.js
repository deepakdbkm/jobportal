import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Reg extends Component {

  constructor() {

    super();


    this.state = {

      firstname: '',

      lastname: '',

      gender: '',

      dob:'',

      email: '',

      skills: '',

      username: '',

      password: ''

      

    }

    this.email = this.email.bind(this);

    this.password = this.password.bind(this);

    this.firstname = this.firstname.bind(this);

    this.lastname = this.lastname.bind(this);

    this.gender = this.gender.bind(this);

    this.dob = this.dob.bind(this);

    this.skills = this.skills.bind(this);

    this.username = this.username.bind(this);

    this.register = this.register.bind(this);

  }

  email(event) {

    this.setState({ email: event.target.value })

  }

  firstname(event) {

    this.setState({ firstname: event.target.value })

  }
  lastname(event) {

    this.setState({ lastname: event.target.value })

  }


  password(event) {

    this.setState({ password: event.target.value })

  }

  username(event) {

    this.setState({ username: event.target.value })

  }

  gender(event) {

    this.setState({ gender: event.target.value })

  }
  dob(event) {

    this.setState({ dob: event.target.value })

  }

  skills(event) {

    this.setState({ skills: event.target.value })

  }

  register(event) {

    fetch('http://localhost:8080/api/ApplicantRegistrtion', {

      method: 'post',

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({


        firstname: this.state.firstname,

        lastname: this.state.lastname,

        password: this.state.password,

        email: this.state.email,

        dob: this.state.dob,

        skills: this.state.skills,

        gender: this.state.gender,

        username: this.state.username,


      })

    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.Status == 'Success')

                this.props.history.push("/Dashboard");

        else

          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

      })

  }


  render() {

    return (

      <div className="app flex-row align-items-center">

        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4">

                <CardBody className="p-4">

                  <Form>

                    <div class="row" className="mb-2 pageheading">

                      <div class="col-sm-12 btn btn-primary">

                        Sign Up

                        </div>

                    </div>

                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.firstname} placeholder="Enter First Name" />

                    </InputGroup>


                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.lastname} placeholder="Enter Last Name" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.email} placeholder="Enter Email" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.username} placeholder="Enter UserName" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="password"  onChange={this.password} placeholder="Enter Password" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text"  onChange={this.gender} placeholder="Enter Gender" />

                    </InputGroup>

                      <InputGroup className="mb-4">

                      <Input type="date"  onChange={this.dob} placeholder="Enter dob" />

                    </InputGroup>

                    <InputGroup className="mb-4">

                      <Input type="text"  onChange={this.skills} placeholder="Enter Skills" />

                    </InputGroup>

                    <Button  onClick={this.register}  color="success" block>Create Account</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

      </div>

    );

  }

}


export default Reg;
