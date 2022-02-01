import React, { ReactElement } from 'react'
import Icon from 'src/components/icon'
import { Column } from '..'
import { FilterBy } from '../filter'
import { SortBy } from '../sort'
import { getFilterBy, getSortParams } from '../utils'

type Props = {
    columnDef: Column[]
    sortBy?: SortBy
    filterBy?: FilterBy
}

export default function GridTableHeader(props: Props): ReactElement {
    const { columnDef, sortBy, filterBy } = props

    const { sortByCol, isDescending } = getSortParams(sortBy)
    const { filterKey, filterValue } = getFilterBy(filterBy)

    return (
        <>
            {columnDef.map((column) => (
                <div className="grid__table__cell grid__table__cell--header" key={column.title}>
                    <div className="grid__table__cell--header__label">{column.title}</div>
                    {sortByCol === column.propBinding && <Icon icon={isDescending ? 'arrow-down' : 'arrow-up'} />}
                    {filterValue && filterKey === column.propBinding && <Icon icon="filter" />}
                </div>
            ))}
        </>
    )
}
