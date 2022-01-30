import { getCandidates } from 'src/models/candidates/selectors'

describe('models/candidates/selectors', () => {
    const mockState = {
        candidates: {
            data: [
                {
                    name: 'John Doe',
                },
            ],
        },
    }
    describe('getCandidates()', () => {
        test('should return correct data', () => {
            expect(getCandidates(mockState)).toStrictEqual([
                {
                    name: 'John Doe',
                },
            ])
        })
    })
})
