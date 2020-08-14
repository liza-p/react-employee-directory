import React from "react";

function Table(props){
  console.log(props)
  return (
  <table className="table table-hover table-dark">
  <thead>
    <tr className="bg-success">
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Role</th>
      <th scope="col">Salary</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    {props.users.map(function(user,i){
      return(
        <tr key={i}>

        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.role}</td>
        <td>{user.salary}</td>
        <td>{user.DOB}</td>
      </tr>
      )
    })
    }
    
  </tbody>
</table>
)
}

export default Table;

