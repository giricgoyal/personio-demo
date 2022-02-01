import classNames from 'classnames'
import React, { ReactElement } from 'react'
import { Column, Row } from '..'

type Props = {
    columnDef: Column[]
    data: Row[]
}

export default function GridTableBody(props: Props): ReactElement {
    const { columnDef, data } = props
    return (
        <>
            {data.map((row, rowIndex) =>
                columnDef.map((column, colIndex) => {
                    const className = classNames({
                        grid__table__cell: true,
                        'grid__table__cell--number': column.type === 'number',
                    })
                    return (
                        <div className={className} key={`cell_${rowIndex}_${colIndex}`}>
                            {row[column.propBinding]}
                        </div>
                    )
                }),
            )}
        </>
    )
}
