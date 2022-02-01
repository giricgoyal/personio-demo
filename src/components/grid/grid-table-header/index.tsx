import React, { ReactElement } from 'react'
import { Column } from '..'

type Props = {
    columnDef: Column[]
}

export default function GridTableHeader(props: Props): ReactElement {
    const { columnDef } = props

    return (
        <>
            {columnDef.map((column) => (
                <div className="grid__table__cell grid__table__cell--header" key={column.title}>
                    {column.title}
                </div>
            ))}
        </>
    )
}
