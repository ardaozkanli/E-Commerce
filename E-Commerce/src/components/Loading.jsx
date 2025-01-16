import React, { useState } from 'react'
import { Backdrop } from '@mui/material'
import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux';
function Loading() {

    const { loading } = useSelector((store) => store.product)

    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading