import { fireEvent } from '@testing-library/react'
import React from 'react'
import Button from 'src/components/button'
import { render } from 'tests/test-utils'

describe('component/button', () => {
    let container, getByTestId, onClickHandler

    beforeEach(() => {
        onClickHandler = jest.fn()
        ;({ container, getByTestId } = render(<Button onClick={onClickHandler}>Label</Button>))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('Click event', () => {
        beforeEach(() => {
            fireEvent.click(getByTestId('button'))
        })

        test('should call the onClickHandler', () => {
            expect(onClickHandler).toHaveBeenCalledTimes(1)
        })
    })
})
