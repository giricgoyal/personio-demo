import { SET_CANDIDATES_DATA } from './action-types'

const initialState = {
    data: [],
}

const candidates = (state = initialState, action) => {
    switch (action.type) {
        case SET_CANDIDATES_DATA: {
            return {
                ...state,
                data: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default {
    candidates,
}
