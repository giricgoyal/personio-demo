import { render } from '@testing-library/react'
import React from 'react'
import Navbar from 'src/components/navbar'

describe('components/navbar', () => {
    let container

    beforeEach(() => {
        container = render(<Navbar />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
