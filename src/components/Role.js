import React from 'react'
import RoleDropDown from './RoleDropDown'

function Role({ role }) {
  if (role === "Owner") {
    return <div>{role}</div>
  } else {
    return <RoleDropDown role={role} />
  }
}

export default Role