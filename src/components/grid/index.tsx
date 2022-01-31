import React, { ReactElement } from 'react'

type Props = {
    data: Array<Record<string, unknown>>
    isLoading?: boolean
    title?: string
}

export default function Grid(props: Props): ReactElement {
    const { data, isLoading, title } = props
    return <div>{title}</div>
}
