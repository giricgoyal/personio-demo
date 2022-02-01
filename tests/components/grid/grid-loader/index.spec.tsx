import React from 'react'
import GridLoader from 'src/components/grid/grid-loader'
import { render } from 'tests/test-utils'

describe('components/grid/grid-loader', () => {
    let container, rerender

    beforeEach(() => {
        ;({ container, rerender } = render(<GridLoader />))
    })

    test('should not render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('When lodaing', () => {
        beforeEach(() => {
            rerender(<GridLoader isLoading />)
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
