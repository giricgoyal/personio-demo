const getState = (state) => state?.candidates

export const getCandidates = (state) => getState(state)?.data
