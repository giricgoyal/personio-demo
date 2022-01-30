import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { FETCH_CANDIDATES } from './action-types'
import * as api from 'src/common/api'
import { setCandidatesData } from './actions'

export function* fetchCandidates() {
    try {
        const result = yield call(api.getData, 'candidates')
        yield put(setCandidatesData(result?.data))
    } catch (error) {
        console.log(error)
    }
}

function* fetchCandidatesSaga() {
    yield takeLatest(FETCH_CANDIDATES, fetchCandidates)
}

export default [fork(fetchCandidatesSaga)]
