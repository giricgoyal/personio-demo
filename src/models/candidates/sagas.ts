import { call, CallEffect, fork, put, PutEffect, takeLatest } from 'redux-saga/effects'
import { FETCH_CANDIDATES } from './action-types'
import { setCandidatesData, setError, setIsLoading } from './actions'
import { ACTION } from './types'
import { CANDIDATE_RESPONSE, getCandidates } from 'src/common/endpoints/candidates'

export function* fetchCandidates(): Generator<
    CallEffect<CANDIDATE_RESPONSE> | PutEffect<ACTION>,
    void,
    CANDIDATE_RESPONSE
> {
    try {
        yield put(setIsLoading(true))
        const result: CANDIDATE_RESPONSE = yield call(getCandidates)
        if (result.data) {
            yield put(setCandidatesData(result?.data))
            yield put(setError(''))
        } else if (result.error) {
            throw result.error
        }
    } catch (error) {
        yield put(setError('An error occured'))
    } finally {
        yield put(setIsLoading(false))
    }
}

function* fetchCandidatesSaga() {
    yield takeLatest(FETCH_CANDIDATES, fetchCandidates)
}

export default [fork(fetchCandidatesSaga)]
