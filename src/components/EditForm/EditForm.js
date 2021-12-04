import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./form.css";
import {Authentication} from '../Services';

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      FullName: "",
      street: "",
      city: "",
      zipCode: "",
      grade: "",
      state:"",
      validMsg: "",
      studentData:[],
     

    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    let response = await fetch(`http://localhost:8080/student/${this.state.id}`);
    let data = await response.json();
    console.log(data)
    this.setState({ FullName: data.studentName , street:data.address.street , city:data.address.city, zipCode:data.address.zipCode,
       state :data.address.state,grade:data.grade}
     
    )}
  
  handleChange(event) {
    console.log(this.props);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.props);    if (
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
       
        Authentication.updateStudent(newStudent,this.state.id)
        .then((response)=>{
         if(response.status===204){
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
      <div>
      <h1>Edit Student Form </h1>
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
      </div>
    );
  }
}
