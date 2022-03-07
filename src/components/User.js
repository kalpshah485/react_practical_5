import React from 'react'
import Avatar from './Avatar'
import Email from './Email'
import Name from './Name'
import Role from './Role'
import Status from './Status'

function User({ user }) {

    return (
        <tr>
            <td>
                <div className="row">
                    <div className="col-2">
                        <Avatar avatar={user.avatar} />
                    </div>
                    <div className="col m-auto">
                        <Name first_name={user.first_name} last_name={user.last_name} />
                        <Email email={user.email} />
                    </div>
                </div>
            </td>
            <td><Status status={user.status} /></td>
            <td><Role role={user.role} /></td>
        </tr>
    )
}

export default User