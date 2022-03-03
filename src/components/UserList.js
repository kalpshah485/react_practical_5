import React from 'react';
import { useSelector } from 'react-redux';

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
                                        <tr key={index}>
                                            <td>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img className="img-radius" src={user.avatar} alt="" />
                                                    </div>
                                                    <div className="col m-auto">
                                                        <div>{user.first_name + " " + user.last_name}</div>
                                                        <div className="text-muted">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{user.status}</td>
                                            <td>{user.Access}</td>
                                        </tr>
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