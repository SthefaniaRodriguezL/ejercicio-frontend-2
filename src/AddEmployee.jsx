import React, { Component } from 'react'

class Add extends Component {
  constructor(props){
    super(props);
    this.state={
      value1:""
    };
    this.handleChange=this.handleChange.bind(this);
  }
  removeEmployees(id){
    this.props.removeEmployees(id);
  }
  handleChange(e){
    this.setState({value1:e.target.value});
  }
  render(){
    return(
      <div className='addEmployees'>
       <button onClick={this.handleChange}>{this.handleChange}</button>
       <button className='remove' onClick={(e)=> this.removeEmployees(this.props.id)}>remove button</button>
      </div>
    )
  }
}

export default Add;
