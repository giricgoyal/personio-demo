import React from 'react'
import GridError from 'src/components/grid/grid-error'
import { render } from 'tests/test-utils'

describe('components/grid/grid-error', () => {
    let container, onGridRefreshHandler, rerender

    beforeEach(() => {
        onGridRefreshHandler = jest.fn()
        ;({ container, rerender } = render(<GridError error="an error" onGridRefresh={onGridRefreshHandler} />))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('When no error', () => {
        beforeEach(() => {
            rerender(<GridError onGridRefresh={onGridRefreshHandler} />)
        })

        test('should not render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
