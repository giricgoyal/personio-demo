import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from 'src/App'

describe('App', () => {
    let container
    const renderer = new ShallowRenderer()

    beforeEach(() => {
        container = renderer.render(<App />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
