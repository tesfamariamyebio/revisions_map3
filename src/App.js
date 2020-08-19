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
      <div className="container bg-danger m-6 p-.5">
        <div className="row mt-5">
        {students.map((x)=>{
          
          return(
            
                <div className="col-3 ml-0.5" >
                  
                <Card names={x.name} lastnames={x.surname} />
                              
                        
                </div>            
          )
        })}
        </div>
       
    </div>
    );
  }
}
export default App;