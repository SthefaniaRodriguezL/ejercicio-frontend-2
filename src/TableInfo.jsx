//Tables of the employee information
import React, { Component } from 'react'
import employees from './employees/index.js'

class Tables extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
//this is where I'm giving it the decimal function and where to make the employee info iterate
  render(){
    return(
      <div>
         <table>
          <thead>
           <tr>
             <th>name</th>
             <th>company</th>
             <th>salary</th>
             <th>age</th>
             <th>phone</th>
             <th>email</th>
           </tr>
          </thead>
             {employees.map(function(item){
    return (
         <tbody>
           <tr>
             <td>{item.name}</td>
             <td>{item.company}</td>
             <td>${item.salary.toFixed(2)}</td>
             <td>{item.age}</td>
             <td>{item.phone}</td>
             <td>{item.email}</td>
           </tr>
         </tbody>
          )
           })}
         </table>
      </div>
    )
  }
}

export default Tables;
