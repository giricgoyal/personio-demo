import { FETCH_CANDIDATES_SET_LOADING, SET_CANDIDATES_DATA } from './action-types'
import { ACTION, CANDIDATE } from './types'

export const initialState = {
    data: [],
    isLoading: false,
}

const candidates = (
    state = initialState,
    action: ACTION,
): {
    data: Array<CANDIDATE>
    isLoading: boolean
} => {
    const { type, payload } = action
    switch (type) {
        case SET_CANDIDATES_DATA: {
            return {
                ...state,
                ...payload,
            }
        }
        case FETCH_CANDIDATES_SET_LOADING: {
            return {
                ...state,
                ...payload,
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
