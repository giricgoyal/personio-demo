import React, { ReactElement } from 'react'
import GridHeader from './header'
import { getData, getSortableColumns } from './utils'

export type Column = {
    title: string
    propBinding: string
    sort?: boolean
    filter?: boolean
}

export type Row = {
    [key: string]: string | number
}

type Props = {
    columnDef: Array<Column>
    data: Array<Row>
    isLoading?: boolean
    title: string
    sortBy: string | null
    onSortChange: (value: string) => void
}

export default function Grid(props: Props): ReactElement {
    const { columnDef, data, isLoading, title, sortBy, onSortChange } = props
    const sortableColumns = getSortableColumns(columnDef)
    const sortedFilteredData = getData(data, sortBy)

    return (
        <div className="grid">
            <GridHeader
                title={title}
                dataCount={data.length}
                totalCount={sortedFilteredData.length}
                sortableColumns={sortableColumns}
                sortBy={sortBy}
                onSortChange={onSortChange}
            />
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
                    {sortedFilteredData.map((row, rowIndex) =>
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
