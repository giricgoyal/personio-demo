import React, { ReactElement } from 'react'
import ComboBox from 'src/components/combo-input'
import Select from 'src/components/select'
import { getFilterBy } from '../utils'

export type FilterOption = {
    label: string
    value: string
    filterValues: Array<string | number>
}

export type FilterBy = string | null | undefined

type Props = {
    className?: string
    filterOptions: Array<FilterOption>
    onChange: (filter: string) => void
    filterBy: FilterBy
}

export default function Filter(props: Props): ReactElement {
    const { filterOptions, filterBy, onChange, className } = props

    const { filterKey, filterValue } = getFilterBy(filterBy)
    const dataList = filterOptions.find(({ value }) => value === filterKey)?.filterValues

    const getFilterString = (key = '', value = '') => (key ? `${key}:${value}` : '')

    const handleFilterChange = (key: string) => {
        onChange(getFilterString(key))
    }

    const handleFilterValueChange = (value: string) => {
        onChange(getFilterString(filterKey, value))
    }

    return (
        <div className={className}>
            <i className="fas fa-filter"></i>
            <Select
                data-testid="filterby-select"
                options={filterOptions}
                onChange={handleFilterChange}
                selected={filterKey}
            />
            <ComboBox
                id="filter-value-input"
                data-testid="filter-value-input"
                value={filterValue}
                onChange={handleFilterValueChange}
                dataList={dataList}
            />
        </div>
    )
}
