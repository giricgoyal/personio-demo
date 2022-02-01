import React from 'react'
import Icon from 'src/components/icon'
import { render } from 'tests/test-utils'

describe('components/icon', () => {
    let container, rerender

    beforeEach(() => {
        ;({ container, rerender } = render(<Icon icon="filter" size="small" />))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })

    describe('When invalid icon is provided', () => {
        beforeEach(() => {
            rerender(<Icon icon="invalid" />)
        })

        test('should not render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })

    describe('When spin is provided', () => {
        beforeEach(() => {
            rerender(<Icon icon="spinner" spin />)
        })

        test('should render and match snapshot', () => {
            expect(container).toMatchSnapshot()
        })
    })
})
