import React from 'react';
import User from './User';
import { useSelector } from 'react-redux';

function UserTable() {
    const users = useSelector(state => state.reducer.users);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Access</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return (
                            <User key={index} user={user} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default UserTable;