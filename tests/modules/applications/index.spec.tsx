import React from 'react'
import { render } from 'tests/test-utils'
import Applications from 'src/modules/applications'

describe('modules/applications', () => {
    let container
    beforeEach(() => {
        container = render(<Applications />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
