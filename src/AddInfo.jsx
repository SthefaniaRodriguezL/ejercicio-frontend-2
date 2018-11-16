import React, { Component } from 'react'

class AddInfo extends Component {
  createInfo(employeeInfo){
    return (
      <tr>
      <td key={employeeInfo.key}>{employeeInfo.text}</td>
     </tr>)
  }
  render() {
    var doEntries = this.props.entries;
    var listInfo = doEntries.map(this.createInfo);

    return(
      <td className='information'>
       {listInfo}
      </td>
    )
  }
}
export default AddInfo;
