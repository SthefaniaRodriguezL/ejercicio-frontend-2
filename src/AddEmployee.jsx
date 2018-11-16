import React, { Component } from 'react'
import AddInfo from './AddInfo'
import TableInfo from './TableInfo'
import employees from'./employees/index.js';

class Add extends Component {
  constructor(props){
    super(props);
    this.state = {
      employeeInfo: employees
    }
    this.addEmployees=this.addEmployees.bind(this);
  }
     addEmployees(e){
      if(this._inputElement.value !== ''){
        var newInfo = {
          text: this._inputElement.value,
          key: Date.now()
        };
        this.setState((prevState) => {
          return {
            employeeInfo: prevState.employeeInfo.concat(newInfo)
          };
        });
      }
      this._inputElement.value ="";
      e.preventDefault();
     }

  render(){
    console.log(this.state.employeeInfo);
    return(
      <div className='add'>
       <form onSubmit={this.addEmployees}>
         <input ref={(a) => this._inputElement = a}
            placeholder='employee information'></input>
         <button type='submit'>Add</button>
         <TableInfo />
       </form>
       <AddInfo entries={this.state.employeeInfo}/>
      </div>
    )
  }
}

export default Add;
