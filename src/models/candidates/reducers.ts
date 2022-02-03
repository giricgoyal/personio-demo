import { FETCH_CANDIDATES, SET_LOADING, SET_CANDIDATES_DATA, SET_ERROR } from './action-types'
import { ACTION, CANDIDATE } from './types'

export const initialState = {
    data: [],
    isLoading: false,
    error: '',
}

const candidates = (
    state = initialState,
    action: ACTION,
): {
    data: Array<CANDIDATE>
    isLoading: boolean
    error: string
} => {
    const { type, payload } = action
    switch (type) {
        case FETCH_CANDIDATES: {
            return {
                ...state,
                error: '',
                data: [],
            }
        }
        case SET_CANDIDATES_DATA: {
            return {
                ...state,
                ...payload,
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                ...payload,
            }
        }
        case SET_ERROR: {
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
