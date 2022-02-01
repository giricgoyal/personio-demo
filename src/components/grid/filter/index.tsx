import React, { ReactElement } from 'react'
import ComboBox from 'src/components/combo-input'
import Select from 'src/components/select'

export type FilterOption = {
    label: string
    value: string
    filterValues: Array<string | number>
}

export type FilterBy = string | null

type Props = {
    filterOptions: Array<FilterOption>
    onChange: (filter: string) => void
    filterBy: FilterBy
}

export default function Filter(props: Props): ReactElement {
    const { filterOptions, filterBy, onChange } = props

    const filterKey = filterBy?.split(':')[0]
    const filterValue = filterBy?.split(':')[1]
    const dataList = filterOptions.find(({ value }) => value === filterKey)?.filterValues

    const getFilterBy = (key = '', value = '') => (key ? `${key}:${value}` : '')

    const handleFilterChange = (key: string) => {
        onChange(getFilterBy(key))
    }

    const handleFilterValueChange = (value: string) => {
        onChange(getFilterBy(filterKey, value))
    }

    return (
        <div>
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
