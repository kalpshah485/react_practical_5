import React from 'react'

import RoleDropDown from './RoleDropDown'

function Role({ user }) {
  if (user.role === "Owner") {
    return (user.role);
  } else {
    return (<RoleDropDown user={user} />);
  }
}

export default Role