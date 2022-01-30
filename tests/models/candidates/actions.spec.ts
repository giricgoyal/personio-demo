import { FETCH_CANDIDATES, SET_CANDIDATES_DATA } from 'src/models/candidates/action-types'
import { fetchCandidates, setCandidatesData } from 'src/models/candidates/actions'

describe('models/candidates/actions', () => {
    describe('fetchCandidates()', () => {
        test('should return correct data', () => {
            expect(fetchCandidates()).toStrictEqual({
                type: FETCH_CANDIDATES,
            })
        })
    })

    describe('setCandidatesData()', () => {
        test('should return correct data', () => {
            expect(setCandidatesData([{ name: 'John Doe' }])).toStrictEqual({
                type: SET_CANDIDATES_DATA,
                payload: [{ name: 'John Doe' }],
            })
        })
    })
})
