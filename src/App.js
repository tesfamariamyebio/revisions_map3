import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './componnent/Card';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      students:[]
    }
  }
  render(){
const students=[{
  id: 'abc',
  name: 'Evelyn',
  surname: 'Arnett'
  }, {
  id: 'def',
  name: 'Glenn',
  surname: 'Bradford'
  }, {
  id: 'ghi',
  name: 'Kourtney',
  surname: 'Calloway'
  }, {
  id: 'jkl',
  name: 'Dawson',
  surname: 'Eagerton'
  }, {
  id: 'mno',
  name: 'Maggie',
  surname: 'Townsend'
  }, {
  id: 'pqr',
  name: 'Kyle',
  surname: 'Millhouse'
  }

];
    return (
      <div className="container">
        <div className="row">
        {students.map((x)=>{
          
          return(
            
                <div className="col-3">
                 
                            <ul className="list-group text-center font-weight-normal" >
                               <li className="list-group-item"> {x.name} {x.surname}
                               </li>
                            </ul>
                </div>            
          )
        })}
        </div>
        okk 
    </div>
    );
  }
}
export default App;