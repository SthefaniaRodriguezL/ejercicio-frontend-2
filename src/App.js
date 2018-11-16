import React, { Component } from 'react'
import Tables from './TableInfo'
import Add from './AddEmployee'

class App extends Component {
  //Main file where everything is being rendered
  render() {
    return (
     <div>
      <div>
       <Add />
      </div>
       <Tables />
     </div>
    );
  }
}

export default App;
