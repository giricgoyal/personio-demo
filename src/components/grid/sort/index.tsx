import React, { ReactElement, useCallback } from 'react'
import Select from 'src/components/select'
import Button from 'src/components/button'
import { getSortParams } from '../utils'

export type SortOption = {
    label: string
    value: string
}

export type SortBy = string | null | undefined

type Props = {
    className?: string
    sortOptions: Array<SortOption>
    onChange: (value: string) => void
    sortBy: SortBy
}

export default function Sort(props: Props): ReactElement {
    const { className, sortOptions, onChange, sortBy } = props
    const { col: sortByCol, isDescending } = getSortParams(sortBy)

    const getSortValue = (value, isDescending) => `${isDescending ? '-' : ''}${value}`

    const handleSelectChange = useCallback(
        (value) => {
            onChange(getSortValue(value, isDescending))
        },
        [onChange, sortBy],
    )

    const handleSortOrderChange = useCallback(() => {
        onChange(getSortValue(sortByCol, !isDescending))
    }, [sortBy, onChange])

    return (
        <div className={className}>
            <i className="fas fa-sort"></i>
            <Select data-testid="select" options={sortOptions} onChange={handleSelectChange} selected={sortByCol} />
            <Button data-testid="sort-order-button" onClick={handleSortOrderChange} type="tertiary">
                {isDescending ? <i className="fas fa-arrow-down"></i> : <i className="fas fa-arrow-up"></i>}
            </Button>
        </div>
    )
}
