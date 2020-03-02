import React, { useState, useEffect, Fragment } from 'react';


const TxtInput = React.lazy(() => import('./Inputs/Txt'));
const NumInput = React.lazy(() => import('./Inputs/Num'));

const PrivateSubscriber = (props) => {
    return(
        <Fragment>
            <TxtInput lbl="Subscriber name" name="subscriberName" plh="e.g. Haji" charLimit={8} />
        </Fragment>
    )
}

export default PrivateSubscriber;