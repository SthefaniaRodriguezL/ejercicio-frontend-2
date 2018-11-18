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
       <div>
         <input ref={(a) => this._inputElement = a}
            placeholder="name"></input>
          <button type='submit'>Submit</button>
      </div>
      <div>
         <input ref={(a) => this._inputElement = a}
            placeholder='company'></input>
          <button type='submit'>Submit</button>
      </div>
      <div>
          <input ref={(a) => this._inputElement = a}
               placeholder='salary'></input>
           <button type='submit'>Submit</button>
      </div>
      <div>
               <input ref={(a) => this._inputElement = a}
                  placeholder='age'></input>
                  <button type='submit'>Submit</button>
     </div>
     <div>
          <input ref={(a) => this._inputElement = a}
             placeholder='phone'></input>
           <button type='submit'>Submit</button>
    </div>
    <div>
           <input ref={(a) => this._inputElement = a}
              placeholder='email'></input>
            <button type='submit'>Submit</button>
    </div>
         <TableInfo />
       </form>
       <AddInfo entries={this.state.employeeInfo}/>
      </div>
    )
  }
}

export default Add;
