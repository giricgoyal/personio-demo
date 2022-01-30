import { call, put } from 'redux-saga/effects'
import { getData } from 'src/common/api'
import { setCandidatesData } from 'src/models/candidates/actions'
import { fetchCandidates } from 'src/models/candidates/sagas'

describe.only('models/candidates/sagas', () => {
    describe('fetchCandidates()', () => {
        const gen = fetchCandidates()

        test('should call getData', () => {
            expect(gen.next().value).toStrictEqual(call(getData, 'candidates'))
        })

        test('should put candidate data', () => {
            expect(gen.next().value).toStrictEqual(put(setCandidatesData(undefined)))
        })
    })
})
