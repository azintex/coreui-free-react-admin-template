import React, { useState, useEffect } from 'react';

const Txt = React.lazy(() => import('./Inputs/Txt'));
const TxtAndNum = React.lazy(() => import('./Inputs/TxtAndNum'));
const NumInput = React.lazy(() => import('./Inputs/Num'));

const CompanySubscriber = (props) => {
    return(
        <React.Fragment>
            <TxtAndNum lbl={props.lbl} name={props.name} plh={props.plh} charLimit={props.charLimit} />
        </React.Fragment>
    )
}

export default CompanySubscriber;