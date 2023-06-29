import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function ValidationSymbols({criteria, validCriteria}) {
    return (
        <>
            <span className={`validation__icon ${validCriteria ? "valid" : "hide"}`}>
                <CheckIcon />
            </span>
            <span className={`validation__icon ${validCriteria || !criteria ? "hide" : "invalid"}`}>
                <CloseIcon />
            </span>
        </>
    )
}

export default ValidationSymbols;