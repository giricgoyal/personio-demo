import { fireEvent } from '@testing-library/react'
import React from 'react'
import ComboBox from 'src/components/combo-input'
import { render } from 'tests/test-utils'

describe('components/combo-box', () => {
    let container, getByTestId, onChangeHandler
    const dataList = ['John Doe', 'Jane Austin', 'Mark Roger']

    beforeEach(() => {
        onChangeHandler = jest.fn()
        ;({ container, getByTestId } = render(
            <ComboBox id="combo-box" onChange={onChangeHandler} dataList={dataList} />,
        ))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('On value change', () => {
        beforeEach(() => {
            fireEvent.change(getByTestId('input'), {
                target: {
                    value: 'john',
                },
            })
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })

        test('should call the onChangeHandler', () => {
            expect(onChangeHandler).toHaveBeenCalledWith('john')
        })
    })
})
