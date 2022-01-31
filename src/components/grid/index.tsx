import React, { ReactElement } from 'react'
import GridHeader from './header'

export type Column = {
    title: string
    propBinding: string
}

type Row = {
    [key: string]: string | number
}

type Props = {
    columnDef: Array<Column>
    data: Array<Row>
    isLoading?: boolean
    title?: string
}

export default function Grid(props: Props): ReactElement {
    const { columnDef, data, isLoading, title } = props
    console.log(data)
    return (
        <div className="grid">
            <GridHeader title={title} dataCount={data.length} totalCount={data.length} />
            {isLoading ? (
                <div className="grid__loading">
                    <div>loading</div>
                </div>
            ) : (
                <div className={`grid__table grid__table--grid-${columnDef.length}`}>
                    {columnDef.map((column) => (
                        <div className="grid__table__cell grid__table__cell--header" key={column.title}>
                            {column.title}
                        </div>
                    ))}
                    {data.map((row, rowIndex) =>
                        columnDef.map((column, colIndex) => (
                            <div className="grid__table__cell" key={`cell_${rowIndex}_${colIndex}`}>
                                {row[column.propBinding]}
                            </div>
                        )),
                    )}
                </div>
            )}
        </div>
    )
}
