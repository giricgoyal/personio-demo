import * as React from 'react'
import Navbar from './components/navbar'
import Router from './router'

export default function App(): React.ReactElement {
    return (
        <>
            <Navbar />
            <div className="app__page">
                <Router />
            </div>
        </>
    )
}
