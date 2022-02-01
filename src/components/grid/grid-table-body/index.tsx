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
                columnDef.map((column, colIndex) => (
                    <div className="grid__table__cell" key={`cell_${rowIndex}_${colIndex}`}>
                        {row[column.propBinding]}
                    </div>
                )),
            )}
        </>
    )
}
