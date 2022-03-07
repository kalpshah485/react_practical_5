import React from 'react'
import { useDispatch } from 'react-redux'
import { addSelectedUser } from '../redux/actions'
import Avatar from './Avatar'
import Email from './Email'
import Name from './Name'
import Role from './Role'
import Status from './Status'

function User({ user }) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>
                <div className="row" onMouseEnter={() => dispatch(addSelectedUser(user))}>
                    <div className="col-2">
                        <Avatar avatar={user.avatar} size="img-small" />
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