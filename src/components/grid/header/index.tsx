import React, { ReactElement } from 'react'
import Filter, { FilterBy, FilterOption } from '../filter'
import Sort, { SortBy, SortOption } from '../sort'

type Props = {
    dataCount: number
    title: string
    totalCount: number
    sortableColumns: Array<SortOption>
    sortBy: SortBy
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
                <Filter
                    className="grid__header__right__filter"
                    filterOptions={filterOptions}
                    onChange={onFilterChange}
                    filterBy={filterBy}
                />
                <Sort
                    className="grid__header__right__sort"
                    sortOptions={sortableColumns}
                    onChange={onSortChange}
                    sortBy={sortBy}
                />
            </div>
        </div>
    )
}
