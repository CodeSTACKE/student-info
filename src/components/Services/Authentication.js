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
  
   
}
export default  new Authentication();