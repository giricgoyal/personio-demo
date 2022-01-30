import { SET_CANDIDATES_DATA } from 'src/models/candidates/action-types'
import candidatesReducers from 'src/models/candidates/reducers'

describe('models/candidates/reducers', () => {
    describe('When action type is undefined', () => {
        test('should return correct state', () => {
            expect(candidatesReducers.candidates(undefined, {})).toStrictEqual({
                data: [],
            })
        })
    })

    describe('When action type is SET_CANDIDATES_DATA', () => {
        test('should return correct state', () => {
            expect(
                candidatesReducers.candidates(undefined, {
                    type: SET_CANDIDATES_DATA,
                    payload: [{ name: 'John Doe' }],
                }),
            ).toStrictEqual({
                data: [{ name: 'John Doe' }],
            })
        })
    })
})
