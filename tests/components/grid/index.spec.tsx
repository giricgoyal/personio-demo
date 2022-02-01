import { fireEvent, getByTestId, render } from '@testing-library/react'
import React from 'react'
import Grid from 'src/components/grid'

describe('components/grid', () => {
    let container, getByTestId, onSortChangeHandler, onFilterChangeHandler, onGridRefreshHandler
    const columnDef = [
        {
            title: 'Name',
            propBinding: 'name',
            filter: true,
            sort: true,
            type: 'string',
        },
    ]

    describe('When loading', () => {
        beforeEach(() => {
            onSortChangeHandler = jest.fn()
            onFilterChangeHandler = jest.fn()
            onGridRefreshHandler = jest.fn()
            ;({ container } = render(
                <Grid
                    data={[]}
                    isLoading
                    columnDef={columnDef}
                    title="sample grid"
                    sortBy="name"
                    filterBy={''}
                    onSortChange={onSortChangeHandler}
                    onFilterChange={onFilterChangeHandler}
                    onGridRefresh={onGridRefreshHandler}
                />,
            ))
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When not loading', () => {
        describe('When data is present', () => {
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
                ;({ container } = render(
                    <Grid
                        data={data}
                        columnDef={columnDef}
                        title="sample grid"
                        sortBy="name"
                        filterBy={''}
                        onSortChange={onSortChangeHandler}
                        onFilterChange={onFilterChangeHandler}
                        onGridRefresh={onGridRefreshHandler}
                    />,
                ))
            })

            test('should render and match snapshot', () => {
                expect(container).toMatchSnapshot()
            })
        })

        describe('When error occured', () => {
            beforeEach(() => {
                onSortChangeHandler = jest.fn()
                ;({ container, getByTestId } = render(
                    <Grid
                        data={[]}
                        columnDef={columnDef}
                        error="an error occured"
                        title="sample grid"
                        sortBy="name"
                        filterBy={''}
                        onSortChange={onSortChangeHandler}
                        onFilterChange={onFilterChangeHandler}
                        onGridRefresh={onGridRefreshHandler}
                    />,
                ))
            })

            test('should render and match snapshot', () => {
                expect(container).toMatchSnapshot()
            })

            describe('on grid refresh', () => {
                beforeEach(() => {
                    fireEvent.click(getByTestId('refresh-grid-button'))
                })

                test('should call onGridRefreshHandler', () => {
                    expect(onGridRefreshHandler).toHaveBeenCalledTimes(1)
                })
            })
        })
    })
})
