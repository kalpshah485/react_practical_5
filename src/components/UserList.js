import React from 'react';
import HoverUser from './HoverUser';
import UserTable from './UserTable';
function UserList() {
    return (
        <>
            <div className="row m-0">
                <div className="col-8">
                    <UserTable />
                </div>
                <div className="col-4">
                    <HoverUser />                    
                </div>
            </div>
        </>
    )
}

export default UserList