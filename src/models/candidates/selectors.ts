import { CANDIDATE, CANDIDATE_STATE } from './types'

const getState = (state: CANDIDATE_STATE) => state?.candidates

export const getCandidates = (state: CANDIDATE_STATE): Array<CANDIDATE> => getState(state)?.data ?? []

export const getIsLoading = (state: CANDIDATE_STATE): undefined | boolean => getState(state)?.isLoading
