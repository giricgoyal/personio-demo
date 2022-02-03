import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import Applications from './modules/applications'

export default function Router(): ReactElement {
    return (
        <Routes>
            <Route path="/" element={<Applications />} />
        </Routes>
    )
}
