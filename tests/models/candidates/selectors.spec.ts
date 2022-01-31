import { getCandidates, getIsLoading } from 'src/models/candidates/selectors'

describe('models/candidates/selectors', () => {
    const mockState = {
        candidates: {
            data: [
                {
                    name: 'John Doe',
                },
            ],
            isLoading: true,
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
})
