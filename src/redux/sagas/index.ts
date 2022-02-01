import { all } from 'redux-saga/effects'

import candidatesSagas from 'src/models/candidates/sagas'

function* rootSagas(): Generator {
    yield all([...candidatesSagas])
}

export default rootSagas
