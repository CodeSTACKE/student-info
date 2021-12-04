import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./form.css";
import {Authentication} from '../Services';

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      street: "",
      city: "",
      zipCode: "",
      grade: "",
      state:"",
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
      this.state.zipCode === "" &&
      this.state.state=== "" &&
      this.state.grade === ""
    ) {
      this.setState({ ValidMsg: true });
    }
    else{
        const newStudent={
          studentName:this.state.FullName,
           address:{
            street:this.state.street,
            city:this.state.city,
            zipCode:this.state.zipCode,
            state:this.state.state,
          },
          grade:this.state.grade
        };
       
        Authentication.addNewStudent(newStudent)
        .then((response)=>{
         if(response.status===201){
           this.props.history.push(`/load`);

         }
        }).catch(
          ()=>{
          console.log("Error")}
         
        );
        

    }
  }
  render() {
    return (
      <Form id="studentform">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control isrequired
            name="FullName"
            type="text"
            placeholder="Enter Full Name"
            value={this.state.FullName}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control isrequired
            name="street"
            type="text"
            placeholder="Enter street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <Form.Control isrequired
            name="city"
            type="text"
            placeholder="Enter city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <Form.Control isrequired
            name="state"
            type="text"
            placeholder="Enter state"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <Form.Control isrequired
            name="zipCode"
            type="text"
            placeholder="Enter zipCode"
            value={this.state.zipCode}
            onChange={this.handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGrade">
        <Form.Label>Grade </Form.Label>
          <Form.Control isrequired
            name="grade"
            type="text"
            placeholder="Enter Grade"
            value={this.state.grade}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
