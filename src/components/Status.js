import React from 'react';
import StatusDropDown from './StatusDropDown';

function Status({status}) {
    if (status === "Active") {
        return <div>{status}</div>
    }else {
        return <StatusDropDown status={status} />
    }
}

export default Status