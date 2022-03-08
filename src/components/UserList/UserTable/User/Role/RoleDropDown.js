import React from 'react'
import { useDispatch } from 'react-redux'
import { updateRole } from '../../../../../redux/actions';

function RoleDropDown({ user }) {
  const dispatch = useDispatch();
  return (
    <div className="dropdown">
      <button className="btn btn-white dropdown-toggle" type="button" id="roleDropDown" data-bs-toggle="dropdown" aria-expanded="false">
        {user.role}
      </button>
      <ul className="dropdown-menu" aria-labelledby="roleDropDown">
        <li><div className="dropdown-item" onClick={() => dispatch(updateRole(user,"Read"))}>Read</div></li>
        <li><div className="dropdown-item" onClick={() => dispatch(updateRole(user,"Manage"))}>Manager</div></li>
      </ul>
    </div>
  )
}

export default RoleDropDown