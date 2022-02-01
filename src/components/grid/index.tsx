import React, { ReactElement } from 'react'
import Button from '../button'
import { FilterBy } from './filter'
import GridHeader from './header'
import { getData, getFilterOptions, getSortableColumns } from './utils'

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
    error?: string
    isLoading?: boolean
    title: string
    sortBy: string | null
    filterBy: FilterBy
    onSortChange: (value: string) => void
    onFilterChange: (filter: string) => void
    onGridRefresh: () => void
}

export default function Grid(props: Props): ReactElement {
    const { columnDef, error, filterBy, data, isLoading, title, sortBy, onGridRefresh, onSortChange, onFilterChange } =
        props
    const sortableColumns = getSortableColumns(columnDef)
    const sortedFilteredData = getData(data, sortBy, filterBy)
    const filterOptions = getFilterOptions(columnDef, data)

    return (
        <div className="grid">
            <GridHeader
                title={title}
                dataCount={sortedFilteredData.length}
                totalCount={data.length}
                sortableColumns={sortableColumns}
                sortBy={sortBy}
                filterBy={filterBy}
                filterOptions={filterOptions}
                onSortChange={onSortChange}
                onFilterChange={onFilterChange}
            />
            {error && (
                <div className="grid__error">
                    {error}
                    <div>
                        <Button onClick={onGridRefresh} type="tertiary" data-testid="refresh-grid-button">
                            <i className="fas fa-sync fa-2x"></i>
                        </Button>
                    </div>
                </div>
            )}
            {isLoading && (
                <div className="grid__loading">
                    <i className="fas fa-spinner fa-spin fa-2x"></i>
                </div>
            )}
            {!error && !isLoading && (
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
