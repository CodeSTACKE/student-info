import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./form.css";

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      street: "",
      city: "",
      zipcode: "",
      grade: "",
      validMsg: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();

    if (
      this.state.FullName === "" &&
      this.state.street === "" &&
      this.state.city === "" &&
      this.state.zipcode === "" &&
      this.state.grade === ""
    ) {
      this.setState({ ValidMsg: true });
    }
    else{

    }
  }
  render() {
    return (
      <Form id="studentform">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control isRequired
            type="FullName"
            placeholder="Enter Full Name"
            value={this.state.FullName}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control isRequired
            type="street"
            placeholder="Enter street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <Form.Control isRequired
            type="city"
            placeholder="Enter city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <Form.Control isRequired
            type="zipcode"
            placeholder="Enter zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Label>Grade </Form.Label>
        <Form.Group className="mb-3" controlId="formGrade">
          <Form.Control isRequired
            type="grade"
            placeholder="Enter Grade"
            value={this.state.grade}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onclick={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
