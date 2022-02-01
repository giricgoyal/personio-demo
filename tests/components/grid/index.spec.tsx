import { render } from '@testing-library/react'
import React from 'react'
import Grid from 'src/components/grid'

describe('components/grid', () => {
    let container, onSortChangeHandler, onFilterChangeHandler
    const columnDef = [
        {
            title: 'Name',
            propBinding: 'name',
            filter: true,
            sort: true,
        },
    ]

    describe('When loading', () => {
        beforeEach(() => {
            onSortChangeHandler = jest.fn()
            onFilterChangeHandler = jest.fn()
            container = render(
                <Grid
                    data={[]}
                    isLoading
                    columnDef={columnDef}
                    title="sample grid"
                    sortBy="name"
                    filterBy={''}
                    onSortChange={onSortChangeHandler}
                    onFilterChange={onFilterChangeHandler}
                />,
            )
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When not loading', () => {
        const data = [
            {
                name: 'John',
                dateOfBirth: '2000-01-01',
            },
            {
                name: 'Jane',
                dateOfBirth: '1991-01-01',
            },
            {
                name: 'Ray',
                dateOfBirth: '1995-01-01',
            },
        ]

        beforeEach(() => {
            onSortChangeHandler = jest.fn()
            container = render(
                <Grid
                    data={data}
                    columnDef={columnDef}
                    title="sample grid"
                    sortBy="name"
                    filterBy={''}
                    onSortChange={onSortChangeHandler}
                    onFilterChange={onFilterChangeHandler}
                />,
            )
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
