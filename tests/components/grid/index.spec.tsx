import { render } from '@testing-library/react'
import React from 'react'
import Grid from 'src/components/grid'

describe('components/grid', () => {
    let container
    const columnDef = [
        {
            title: 'col1',
            propBinding: 'col1',
        },
    ]

    beforeEach(() => {
        container = render(<Grid data={[]} columnDef={columnDef} />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
