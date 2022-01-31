import { fireEvent } from '@testing-library/react'
import React from 'react'
import Sort from 'src/components/grid/sort'
import { render } from 'tests/test-utils'

describe('components/grid/sort', () => {
    let container, onChangeHandler, getByTestId

    const sortOptions = [
        {
            label: 'col1',
            value: 'col1',
        },
        {
            label: 'col2',
            value: 'col2',
        },
    ]

    beforeEach(() => {
        onChangeHandler = jest.fn()
        ;({ container, getByTestId } = render(
            <Sort sortOptions={sortOptions} sortBy="-col1" onChange={onChangeHandler} />,
        ))
    })

    test('should render correctly and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('When selection is changed', () => {
        beforeEach(() => {
            fireEvent.change(getByTestId('select'), {
                target: {
                    value: 'col2',
                },
            })
        })

        test('Should call the onChangeHandler', () => {
            expect(onChangeHandler).toHaveBeenCalledWith('-col2')
        })
    })

    describe('When sort order is changed', () => {
        beforeEach(() => {
            fireEvent.click(getByTestId('sort-order-button'))
        })

        test('should call the onChangeHandler', () => {
            expect(onChangeHandler).toHaveBeenCalledWith('col1')
        })
    })
})
