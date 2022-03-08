import React from 'react'

function StatusDropDown({ status }) {
    return (
        <div className="dropdown">
            <button className="btn btn-white dropdown-toggle" type="button" id="statusDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                {status}
            </button>
            <ul className="dropdown-menu" aria-labelledby="statusDropDown">
                <li><div className="dropdown-item" onClick={() => console.log("Active clicked")}>Active</div></li>
                <li><div className="dropdown-item" onClick={() => console.log("Inactive clicked")}>Inactive</div></li>
            </ul>
        </div>
    )
}

export default StatusDropDown