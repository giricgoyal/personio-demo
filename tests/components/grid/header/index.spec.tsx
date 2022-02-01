import { render } from '@testing-library/react'
import React from 'react'
import GridHeader from 'src/components/grid/header'

describe('components/grid/header', () => {
    let container, onSortChangeHandler, onFilterChangeHandler
    const sortableColumns = [
        {
            label: 'col1',
            value: 'col1',
        },
    ]

    const filterOptions = [
        {
            label: 'col1',
            value: 'col1',
            filterValues: ['val1', 'val2'],
        },
    ]

    beforeEach(() => {
        onSortChangeHandler = jest.fn()
        onFilterChangeHandler = jest.fn()

        container = render(
            <GridHeader
                title="Some title"
                dataCount={0}
                totalCount={0}
                sortableColumns={sortableColumns}
                sortBy="col1"
                filterBy={''}
                filterOptions={filterOptions}
                onSortChange={onSortChangeHandler}
                onFilterChange={onFilterChangeHandler}
            />,
        )
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
