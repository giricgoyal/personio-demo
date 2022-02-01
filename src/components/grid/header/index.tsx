import React, { ReactElement } from 'react'
import Filter, { FilterBy, FilterOption } from '../filter'
import Sort, { SortOption } from '../sort'

type Props = {
    dataCount: number
    title: string
    totalCount: number
    sortableColumns: Array<SortOption>
    sortBy: string | null
    filterBy: FilterBy
    filterOptions: Array<FilterOption>
    onSortChange: (value: string) => void
    onFilterChange: (filter: string) => void
}

export default function GridHeader(props: Props): ReactElement {
    const {
        dataCount,
        sortableColumns,
        title,
        totalCount,
        sortBy,
        filterBy,
        filterOptions,
        onSortChange,
        onFilterChange,
    } = props

    return (
        <div className="grid__header">
            <div className="grid__header__left">
                <div className="grid__header__left__title">{title}</div>
                <div className="grid__header__left__data-count">
                    ({dataCount}/{totalCount})
                </div>
            </div>
            <div className="grid__header__right">
                <Filter filterOptions={filterOptions} onChange={onFilterChange} filterBy={filterBy} />
                <Sort sortOptions={sortableColumns} onChange={onSortChange} sortBy={sortBy} />
            </div>
        </div>
    )
}
