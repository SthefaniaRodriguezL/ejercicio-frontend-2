//Tables of the employee information
import React, { Component } from 'react'
import employees from './employees/index.js'

class Tables extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
         <table>
          <thead>
           <tr>
             <th>id</th>
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
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.company}</td>
             <td>{item.salary}</td>
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
