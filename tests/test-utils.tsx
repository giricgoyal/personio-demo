import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from 'src/redux/reducers'
import { MemoryRouter } from 'react-router'

function makeTestStore(preloadedState = {}) {
    const store = configureStore({ reducer: rootReducer, preloadedState })
    store.dispatch = jest.fn()
    return store
}

function render(
    ui,
    { preloadedState = {}, store = configureStore({ reducer: rootReducer, preloadedState }), ...renderOptions } = {},
) {
    return rtlRender(<Provider store={store}>{ui}</Provider>, { wrapper: MemoryRouter, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render, makeTestStore }
