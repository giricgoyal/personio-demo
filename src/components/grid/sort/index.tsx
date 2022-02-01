import React, { ReactElement, useCallback } from 'react'
import Select from 'src/components/select'
import Button from 'src/components/button'

export type SortOption = {
    label: string
    value: string
}

type Props = {
    className?: string
    sortOptions: Array<SortOption>
    onChange: (value: string) => void
    sortBy: string | null
}

export default function Sort(props: Props): ReactElement {
    const { className, sortOptions, onChange, sortBy } = props
    const getSortBy = (sortBy) => sortBy.replace('-', '')
    const isDescending = (sortBy) => sortBy.includes('-')

    const getSortValue = (value, isDescending) => `${isDescending ? '-' : ''}${value}`

    const handleSelectChange = useCallback(
        (value) => {
            onChange(getSortValue(value, isDescending(sortBy)))
        },
        [onChange, sortBy],
    )

    const handleSortOrderChange = useCallback(() => {
        const descending = isDescending(sortBy)
        onChange(getSortValue(getSortBy(sortBy), !descending))
    }, [sortBy, onChange])

    return (
        <div className={className}>
            <i className="fas fa-sort"></i>
            <Select
                data-testid="select"
                options={sortOptions}
                onChange={handleSelectChange}
                selected={getSortBy(sortBy)}
            />
            <Button data-testid="sort-order-button" onClick={handleSortOrderChange} type="tertiary">
                {isDescending(sortBy) ? <i className="fas fa-arrow-down"></i> : <i className="fas fa-arrow-up"></i>}
            </Button>
        </div>
    )
}
