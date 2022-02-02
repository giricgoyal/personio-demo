import { upperCase } from 'lodash'
import React from 'react'
import GridTableBody from 'src/components/grid/grid-table-body'
import { render } from 'tests/test-utils'

describe('components/grid/grid-table-body', () => {
    let container
    const columnDef = [
        {
            title: 'Name',
            propBinding: 'name',
            filter: true,
            sort: true,
            type: 'string',
            format: (val) => upperCase(val),
        },
    ]

    const data = [
        {
            name: 'John',
            dateOfBirth: '2000-01-01',
        },
        {
            name: 'Jane',
            dateOfBirth: '1991-01-01',
        },
        {
            name: 'Ray',
            dateOfBirth: '1995-01-01',
        },
    ]

    beforeEach(() => {
        ;({ container } = render(<GridTableBody columnDef={columnDef} data={data} />))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
