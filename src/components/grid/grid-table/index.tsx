import React, { ReactElement, ReactNode } from 'react'

type Props = {
    columns: number
    children: ReactNode
}

export default function GridTable(props: Props): ReactElement {
    const { children, columns } = props

    return <div className={`grid__table grid__table--grid-${columns}`}>{children}</div>
}
