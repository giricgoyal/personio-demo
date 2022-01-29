import * as React from 'react'
import { Route as ReactRouter } from 'react-router-dom'

type Props = {
    exact?: boolean
    path?: string
    Component?: any
}

function Route(props: Props) {
    const { exact, path, Component } = props

    const renderComponent = (renderProps) => <Component {...renderProps} />
    return <ReactRouter exact={exact} path={path} render={renderComponent} />
}

export default Route
