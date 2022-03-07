import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from './Avatar';
import Email from './Email';
import Name from './Name';

function HoverUser() {
    const user = useSelector(state => state.reducer.selectedUser);
    if (user) {
        return (
            <div className="hover-container">
                <div className="card hover-card shadow-lg p-3 mb-5 bg-body">
                    <div className="hover-card-img">
                        <Avatar avatar={user.avatar} size="img-large" />
                    </div>
                    <div className="card-body">
                        <h6 className="card-title d-flex m-0 justify-content-center">
                            <Name first_name={user.first_name} last_name={user.last_name} />
                            {user.status === 'Active' ? <sup className="green-btn">.</sup> : ''}
                        </h6>
                        <Email email={user.email} />
                        <h6>
                            Your Plan: Standard
                        </h6>
                        <div className="status-div">
                            {user.status} User
                        </div>
                        <div className="plan-status">
                            Plan Uses:
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row pt-3">
                            <div className="col">
                                <h2>2000</h2>
                                <p className="text-muted">
                                        clicks reviewed
                                </p>
                            </div>
                            <div className="col">
                                <h2>2000</h2>
                                <p className="text-muted">
                                    Monthly clicks    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="hover-container">
                <div className="card hover-card shadow-lg p-3 mb-5 bg-body rounded">

                </div>
            </div>
        )
    }
}

export default HoverUser