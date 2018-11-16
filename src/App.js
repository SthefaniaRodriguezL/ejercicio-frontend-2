import React, { Component } from 'react'
import employees from './employees'
import Tables from './TableInfo'

class App extends Component {
  //Main file where everything is being rendered
  render() {
    return (
     <div>
       <Tables />
     </div>
    );
  }
}

export default App;
