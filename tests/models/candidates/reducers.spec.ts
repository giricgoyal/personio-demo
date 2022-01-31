import { FETCH_CANDIDATES_SET_LOADING, SET_CANDIDATES_DATA } from 'src/models/candidates/action-types'
import candidatesReducers, { initialState } from 'src/models/candidates/reducers'

describe('models/candidates/reducers', () => {
    describe('When action type is undefined', () => {
        test('should return correct state', () => {
            expect(
                candidatesReducers.candidates(undefined, {
                    type: 'unknown',
                }),
            ).toStrictEqual(initialState)
        })
    })

    describe('When action type is SET_CANDIDATES_DATA', () => {
        test('should return correct state', () => {
            expect(
                candidatesReducers.candidates(undefined, {
                    type: SET_CANDIDATES_DATA,
                    payload: {
                        data: [{ name: 'John Doe' }],
                    },
                }),
            ).toStrictEqual({
                ...initialState,
                data: [{ name: 'John Doe' }],
            })
        })
    })

    describe('When action type is FETCH_CANDIDATES_SET_LOADING', () => {
        test('should return correct state', () => {
            expect(
                candidatesReducers.candidates(undefined, {
                    type: FETCH_CANDIDATES_SET_LOADING,
                    payload: {
                        isLoading: true,
                    },
                }),
            ).toStrictEqual({
                ...initialState,
                isLoading: true,
            })
        })
    })
})
