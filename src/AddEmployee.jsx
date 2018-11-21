import React, { Component } from 'react'
import AddInfo from './AddInfo'
import TableInfo from './TableInfo'
import employees from'./employees/index.js';

class Add extends Component {
  constructor(props){
    super(props);
    this.state = {
      //this gets the information of all the employees
      employeeInfo: employees
    }
    //to render all the information added or removed
    this.addEmployees=this.addEmployees.bind(this);
    this.removeInfo=this.removeInfo.bind(this);
  }
     removeInfo(id) {
       this.props.removeInfo(id);
     }
     addEmployees(e){
       //this is to make sure it isn't empty and it has an action
      if(this._inputElement.value !== ''){
        //to know when it should start or stop the text exactly
        var newInfo = {
          text: this._inputElement.value,
          key: Date.now()
        };
        //this is for the state can be dynamic not just static
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
          <input ref={(e) => this._inputElement = e}
             placeholder='phone'></input>
           <button type='submit'>Submit</button>
    </div>
    <div>
           <input ref={(a) => this._inputElement = a}
              placeholder='email'></input>
            <button type='submit'>Submit</button>
            <button onClick={(e) => this.removeInfo(this.props.id)}>remove</button>{this.props.employeeInfo}
    </div>
         <TableInfo />
       </form>
       <AddInfo entries={this.state.employeeInfo}/>
      </div>
    )
  }
}

export default Add;
