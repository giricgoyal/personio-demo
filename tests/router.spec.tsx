import React from 'react'
import Router from 'src/router'
import { render } from './test-utils'

describe('router', () => {
    let container

    beforeEach(() => {
        ;({ container } = render(<Router />))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
