import React from 'react'

function User({ user }) {

    return (
        <tr>
            <td>
                <div className="row">
                    <div className="col-2">
                        {/* <Avatar /> */}
                        <img className="img-radius" src={user.avatar} alt="" />
                    </div>
                    <div className="col m-auto">
                        {/* <Name /> */}
                        {/* <Email /> */}
                        <div>{user.first_name + " " + user.last_name}</div>
                        <div className="text-muted">{user.email}</div>
                    </div>
                </div>
            </td>
            <td>{user.status}</td>
            <td>{user.Access}</td>
        </tr>
    )
}

export default User