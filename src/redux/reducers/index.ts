import { combineReducers } from 'redux'

import candidatesReducer from 'src/models/candidates/reducers'

export default combineReducers({
    ...candidatesReducer,
})
