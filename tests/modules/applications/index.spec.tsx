import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Applications from 'src/modules/applications'

describe('modules/applications', () => {
    let container
    const renderer = new ShallowRenderer()

    beforeEach(() => {
        container = renderer.render(<Applications />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
