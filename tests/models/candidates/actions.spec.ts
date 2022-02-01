import {
    FETCH_CANDIDATES,
    FETCH_CANDIDATES_SET_LOADING,
    SET_CANDIDATES_DATA,
    SET_ERROR,
} from 'src/models/candidates/action-types'
import { fetchCandidates, setCandidatesData, setError, setIsLoading } from 'src/models/candidates/actions'

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
                payload: {
                    data: [{ name: 'John Doe' }],
                },
            })
        })
    })

    describe('setIsLoading()', () => {
        test('should return correct data', () => {
            expect(setIsLoading(true)).toStrictEqual({
                type: FETCH_CANDIDATES_SET_LOADING,
                payload: {
                    isLoading: true,
                },
            })
        })
    })

    describe('setError()', () => {
        test('should return correct data', () => {
            expect(setError('an error occured')).toStrictEqual({
                type: SET_ERROR,
                payload: {
                    error: 'an error occured',
                },
            })
        })
    })
})
