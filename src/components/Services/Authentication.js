import {Component} from'react';


class Authentication extends Component{
        addNewStudent(newStudent){
        const options={
            method:'POST',
            body:JSON.stringify(newStudent),
            headers:{
              'Content-Type':'application/json'
            }
          }
        return  fetch('http://localhost:8080/student',options)
    }
    updateStudent(newStudent,id){
      const options={
          method:'PUT',
          body:JSON.stringify(newStudent),
          headers:{
            'Content-Type':'application/json'
          }
        }
      return  fetch(`http://localhost:8080/student/${id}`,options)
  }
  deleteStudent(id){
    const options={
      method:'DELETE',
         headers:{
        'Content-Type':'application/json'
      }
    }
  return  fetch(`http://localhost:8080/student/${id}`,options)
  }
   
}
export default  new Authentication();