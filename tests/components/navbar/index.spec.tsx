import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Navbar from 'src/components/navbar'

describe('components/navbar', () => {
    let container
    const renderer = new ShallowRenderer()

    beforeEach(() => {
        container = renderer.render(<Navbar />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
