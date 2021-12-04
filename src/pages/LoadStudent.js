import { Component } from "react";
import { Authentication } from "../components/Services";
import { Table, Button } from "react-bootstrap";
import "./style.css";

class LoadStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      FullName: "",
      street: "",
      city: "",
      zipCode: "",
      grade: "",
      state: "",
      studentData: [],
    };
    this.UpdateStudent = this.UpdateStudent.bind(this);
    this.DeleteStudent = this.DeleteStudent.bind(this);

  }
  UpdateStudent(id) {
      console.log(id);
      this.setState({id:id},()=>{
        
      })

  }
  DeleteStudent(id){
      console.log(id);
  }
  async componentDidMount() {
    let response = await fetch("http://localhost:8080/student");
    let data = await response.json();
    this.setState({ studentData: data });
    console.log(this.state.studentData);
    this.state.studentData.map((stu) => console.log(stu.address.street));
  }
  render() {
    return (
      <div>
        <h1>Student Details </h1>
        <Table striped bordered hover size="sm" id="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>ZipCode</th>
              <th>Grade</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentData.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.studentName}</td>
                <td>{student.address.street}</td>
                <td>{student.address.city}</td>
                <td>{student.address.state}</td>
                <td>{student.address.zipCode}</td>
                <td>{student.grade}</td>
                <td>
                  <Button variant="secondary" onClick={() => this.UpdateStudent(student.id)}>
                    Edit
                  </Button>{" "}
                </td>
                <td>
                  <Button variant="secondary" onClick={() => this.DeleteStudent(student.id)}>
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default LoadStudent;
