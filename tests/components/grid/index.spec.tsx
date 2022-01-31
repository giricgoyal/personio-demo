import { render } from '@testing-library/react'
import React from 'react'
import Grid from 'src/components/grid'

describe('components/grid', () => {
    let container

    beforeEach(() => {
        container = render(<Grid data={[]} />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
