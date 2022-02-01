import React from 'react'
import GridTableHeader from 'src/components/grid/grid-table-header'
import { render } from 'tests/test-utils'

describe('components/grid/grid-table-header', () => {
    let container

    const columnDef = [
        {
            title: 'Name',
            propBinding: 'name',
            filter: true,
            sort: true,
            type: 'string',
        },
    ]

    beforeEach(() => {
        ;({ container } = render(<GridTableHeader columnDef={columnDef} />))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
