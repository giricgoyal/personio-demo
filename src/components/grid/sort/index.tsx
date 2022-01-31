import React, { ReactElement, useCallback } from 'react'
import Select from 'src/components/select'
import Button from 'src/components/button'

type Option = {
    label: string
    value: string
}

type Props = {
    sortOptions: Array<Option>
    onChange: (value: string) => void
    sortBy: string | null
}

export default function Sort(props: Props): ReactElement {
    const { sortOptions, onChange, sortBy } = props
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
        <div>
            <Select
                data-testid="select"
                label="Sort by:"
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
