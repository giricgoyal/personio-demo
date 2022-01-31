import { render } from '@testing-library/react'
import React from 'react'
import GridHeader from 'src/components/grid/header'

describe('components/grid/header', () => {
    let container
    beforeEach(() => {
        container = render(<GridHeader title="Some title" />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
