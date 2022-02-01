import { call, CallEffect, fork, put, PutEffect, takeLatest } from 'redux-saga/effects'
import { FETCH_CANDIDATES } from './action-types'
import * as api from 'src/common/api'
import { setCandidatesData, setError, setIsLoading } from './actions'
import { ACTION } from './types'

export function* fetchCandidates(): Generator<CallEffect<api.API_DATA> | PutEffect<ACTION>, void, api.API_DATA> {
    try {
        yield put(setIsLoading(true))
        const result: api.API_DATA = yield call(api.getData, 'candidates')
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
