import React from 'react'
import Sort from 'src/components/grid/sort'
import { render } from 'tests/test-utils'

describe('components/grid/sort', () => {
    let container
    beforeEach(() => {
        container = render(<Sort />)
    })

    test('should render correctly and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
