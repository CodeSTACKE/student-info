import { Component } from "react";
import './footer.css'
export default class Footer extends Component {
 
  
  render() {
    return (
      <header class="footer">
               <h3 >
                   {`Created by Jyoti Das   ${new Date().getFullYear()}`}
                   
                    </h3>
     </header>
     
    );
  }
}