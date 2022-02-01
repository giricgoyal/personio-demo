import React from 'react'
import GridTable from 'src/components/grid/grid-table'
import { render } from 'tests/test-utils'

describe('components/grid/grid-table', () => {
    let container

    beforeEach(() => {
        ;({ container } = render(
            <GridTable columns={2}>
                <div></div>
            </GridTable>,
        ))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
