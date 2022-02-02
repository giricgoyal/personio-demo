import React, { ReactElement } from 'react'
import { FilterBy } from './filter'
import GridError from './grid-error'
import GridLoader from './grid-loader'
import GridTable from './grid-table'
import GridTableBody from './grid-table-body'
import GridTableHeader from './grid-table-header'
import GridHeader from './header'
import { SortBy } from './sort'
import { getData, getFilterOptions, getSortableColumns } from './utils'

export type Column = {
    title: string
    propBinding: string
    sort?: boolean
    filter?: boolean
    type: string
    format?: (value: string | number) => string | number
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
    sortBy: SortBy
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
            <GridError error={error} onGridRefresh={onGridRefresh} />
            <GridLoader isLoading={isLoading} />
            {!error && !isLoading && (
                <GridTable columns={columnDef.length}>
                    <GridTableHeader columnDef={columnDef} sortBy={sortBy} filterBy={filterBy} />
                    <GridTableBody columnDef={columnDef} data={sortedFilteredData} />
                </GridTable>
            )}
        </div>
    )
}
