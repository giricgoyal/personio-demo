import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(sagaMiddleware),
})

sagaMiddleware.run(rootSagas)
