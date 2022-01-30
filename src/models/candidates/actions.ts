import { FETCH_CANDIDATES, SET_CANDIDATES_DATA } from './action-types'

export const fetchCandidates = () => ({
    type: FETCH_CANDIDATES,
})

export const setCandidatesData = (payload) => ({
    type: SET_CANDIDATES_DATA,
    payload,
})
