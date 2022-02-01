import { fireEvent } from '@testing-library/react'
import React from 'react'
import Filter from 'src/components/grid/filter'
import { render } from 'tests/test-utils'

describe('components/grid/filter', () => {
    let container, getByTestId, onChangeHandler, rerender
    const filterOptions = [
        {
            label: 'col1',
            value: 'col1',
            filterValues: ['val1', 'val2', 'val3'],
        },
        {
            label: 'col2',
            value: 'col2',
            filterValues: ['1', '2', '3'],
        },
    ]

    beforeEach(() => {
        onChangeHandler = jest.fn()
        ;({ container, getByTestId, rerender } = render(
            <Filter filterOptions={filterOptions} onChange={onChangeHandler} filterBy="" />,
        ))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('When filterBy is provided', () => {
        beforeEach(() => {
            rerender(<Filter filterOptions={filterOptions} onChange={onChangeHandler} filterBy="col1:val2" />)
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        describe('onChange', () => {
            describe('when filter value is changed', () => {
                beforeEach(() => {
                    fireEvent.change(getByTestId('filter-value-input'), {
                        target: {
                            value: 'val1',
                        },
                    })
                })

                test('should call the onChange handler', () => {
                    expect(onChangeHandler).toHaveBeenCalledWith('col1:val1')
                })
            })
        })
    })

    describe('onChange', () => {
        describe('When filter is changed', () => {
            beforeEach(() => {
                fireEvent.change(getByTestId('filterby-select'), {
                    target: {
                        value: 'col2',
                    },
                })
            })

            test('should call the onChange handler', () => {
                expect(onChangeHandler).toHaveBeenCalledWith('col2:')
            })
        })

        describe('when filter value is changed', () => {
            beforeEach(() => {
                fireEvent.change(getByTestId('filter-value-input'), {
                    target: {
                        value: '2',
                    },
                })
            })

            test('should call the onChange handler', () => {
                expect(onChangeHandler).toHaveBeenCalledWith('')
            })
        })
    })
})
