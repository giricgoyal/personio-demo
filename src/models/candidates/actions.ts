import { FETCH_CANDIDATES, FETCH_CANDIDATES_SET_LOADING, SET_CANDIDATES_DATA, SET_ERROR } from './action-types'
import { CANDIDATE } from './types'

export const fetchCandidates = (): {
    type: string
} => ({
    type: FETCH_CANDIDATES,
})

export const setCandidatesData = (
    data: Array<CANDIDATE> | undefined,
): {
    type: string
    payload: {
        data: Array<CANDIDATE> | undefined
    }
} => ({
    type: SET_CANDIDATES_DATA,
    payload: {
        data,
    },
})

export const setIsLoading = (
    isLoading: boolean,
): {
    type: string
    payload: {
        isLoading: boolean
    }
} => ({
    type: FETCH_CANDIDATES_SET_LOADING,
    payload: {
        isLoading,
    },
})

export const setError = (
    error: string,
): {
    type: string
    payload: {
        error: string
    }
} => ({
    type: SET_ERROR,
    payload: {
        error,
    },
})
