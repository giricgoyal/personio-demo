import React from 'react'
import { makeTestStore, render } from 'tests/test-utils'
import Applications from 'src/modules/applications'
import { fetchCandidates } from 'src/models/candidates/actions'
import { fireEvent } from '@testing-library/react'

describe('modules/applications', () => {
    let container, getByTestId
    let store

    describe('When component is rendered first', () => {
        beforeEach(() => {
            store = makeTestStore()
            ;({ container } = render(<Applications />, { store }))
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        test('should call the fetchCandidates action', () => {
            expect(store.dispatch).toHaveBeenCalledWith(fetchCandidates())
        })
    })

    describe('When data is loading', () => {
        beforeEach(() => {
            store = makeTestStore({
                candidates: {
                    isLoading: true,
                },
            })
            ;({ container } = render(<Applications />, { store }))
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When data is present in store', () => {
        beforeEach(() => {
            store = makeTestStore({
                candidates: {
                    data: [
                        {
                            name: 'John Doe',
                            years_of_experience: 23,
                            position_applied: 'writer',
                            application_date: '2019-10-10',
                        },
                        {
                            name: 'Jane Smith',
                            years_of_experience: 23,
                            position_applied: 'QA Engineer',
                            application_date: '2022-10-10',
                        },
                    ],
                },
            })
            ;({ container, getByTestId } = render(<Applications />, { store }))
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        describe('When sort is changed', () => {
            beforeEach(() => {
                fireEvent.change(getByTestId('select'), {
                    target: {
                        value: 'position_applied',
                    },
                })
            })

            test('should render and match snapshot', () => {
                expect(container).toMatchSnapshot()
            })
        })
    })
})
