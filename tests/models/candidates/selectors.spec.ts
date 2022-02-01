import { getCandidates, getError, getIsLoading } from 'src/models/candidates/selectors'

describe('models/candidates/selectors', () => {
    const mockState = {
        candidates: {
            data: [
                {
                    name: 'John Doe',
                },
            ],
            isLoading: true,
            error: 'an error occured',
        },
    }

    describe('getCandidates()', () => {
        test('should return correct data from store', () => {
            expect(getCandidates(mockState)).toStrictEqual([
                {
                    name: 'John Doe',
                },
            ])
        })
    })

    describe('getIsLoading', () => {
        test('should return correct data from store', () => {
            expect(getIsLoading(mockState)).toEqual(true)
        })
    })

    describe('getError', () => {
        test('should return correct data from store', () => {
            expect(getError(mockState)).toEqual('an error occured')
        })
    })
})
