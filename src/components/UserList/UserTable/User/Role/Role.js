import React from 'react'

import RoleDropDown from './RoleDropDown'

function Role({ role }) {
  if (role === "Owner") {
    return (role);
  } else {
    return (<RoleDropDown role={role} />);
  }
}

export default Role