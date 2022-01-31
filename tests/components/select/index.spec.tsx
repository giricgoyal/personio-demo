import { fireEvent, getByTestId } from '@testing-library/react'
import React from 'react'
import Select from 'src/components/select'
import { render } from 'tests/test-utils'

describe('components/select', () => {
    let container, getByTestId, onChangeHandler

    const options = [
        {
            label: 'option 1',
            value: 'option1',
        },
        {
            label: 'Option 2',
            value: 'option2',
        },
    ]
    beforeEach(() => {
        onChangeHandler = jest.fn()
        ;({ container, getByTestId } = render(
            <Select selected="option2" options={options} onChange={onChangeHandler} label="label" />,
        ))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('When select value is changed', () => {
        beforeEach(() => {
            fireEvent.change(getByTestId('select-input'), {
                target: {
                    value: 'option1',
                },
            })
        })

        test('Should trigger onChangeHandler', () => {
            expect(onChangeHandler).toHaveBeenCalledWith('option1')
        })
    })
})
