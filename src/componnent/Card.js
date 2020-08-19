import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Card extends React.Component{
  
  render(){

    return (
            <div>
                  <ul className="list-group text-center font-weight-normal" >
                      <li className="list-group-item m-3 "> {this.props.names} {this.props.lastnames}
                      </li>
                  </ul>
           </div> 
    );
      
            
              
  }
}
export default Card;