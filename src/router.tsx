import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Applications from './modules/applications'

export default function Router(): React.ReactElement {
    return (
        <Routes>
            <Route path="/" element={<Applications />} />
        </Routes>
    )
}
