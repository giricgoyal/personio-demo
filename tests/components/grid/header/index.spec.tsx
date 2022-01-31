import { render } from '@testing-library/react'
import React from 'react'
import GridHeader from 'src/components/grid/header'

describe('components/grid/header', () => {
    let container, onSortChangeHandler
    const sortabelColumns = [
        {
            label: 'col1',
            value: 'col1',
        },
    ]

    beforeEach(() => {
        onSortChangeHandler = jest.fn()
        container = render(
            <GridHeader
                title="Some title"
                dataCount={0}
                totalCount={0}
                sortableColumns={sortabelColumns}
                sortBy="col1"
                onSortChange={onSortChangeHandler}
            />,
        )
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
