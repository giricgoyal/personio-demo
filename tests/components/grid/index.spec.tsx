import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Grid from 'src/components/grid'

describe('components/grid', () => {
    let container
    const renderer = new ShallowRenderer()

    beforeEach(() => {
        container = renderer.render(<Grid data={[]} />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
