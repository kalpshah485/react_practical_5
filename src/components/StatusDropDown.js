import React from 'react'

function StatusDropDown({ status }) {
    return (
        /**
         * reference-link : https://getbootstrap.com/docs/5.0/components/dropdowns/
         */
        <div className="dropdown">
            <button className="btn btn-white dropdown-toggle" type="button" id="statusDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                {status}
            </button>
            <ul className="dropdown-menu" aria-labelledby="statusDropDown">
                <li><div className="dropdown-item">Active</div></li>
                <li><div className="dropdown-item">Inactive</div></li>
            </ul>
        </div>
    )
}

export default StatusDropDown