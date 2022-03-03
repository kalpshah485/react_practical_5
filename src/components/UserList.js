import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

function UserList() {
    const users = useSelector(state => state.reducer.users);
    return (
        <>
            <div className="row m-0">
                <div className="col-9">
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
                </div>
            </div>
        </>
    )
}

export default UserList