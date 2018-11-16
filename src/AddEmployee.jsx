import React, { Component } from 'react'

class Add extends Component {
  constructor(props){
    super(props);
    this.state={
      value1:""
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({value1:e.target.value});
  }
  render(){
    return(
      <div className='addEmployees'>
       <form>
         <input onChange='handleChange'></input>
         <button onClick={this.handleChange}>Add employees</button>
       </form>
      </div>
    )
  }
}

export default Add;
