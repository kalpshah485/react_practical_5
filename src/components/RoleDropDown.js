import React from 'react'

function RoleDropDown({role}) {
  return (
    <div className="dropdown">
            <button className="btn btn-white dropdown-toggle" type="button" id="roleDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                {role }
            </button>
            <ul className="dropdown-menu" aria-labelledby="roleDropDown">
                <li><div className="dropdown-item" onClick={() => console.log("Read clicked")}>Read</div></li>
                <li><div className="dropdown-item" onClick={() => console.log("Manager clicked")}>Manager</div></li>
            </ul>
        </div>
  )
}

export default RoleDropDown