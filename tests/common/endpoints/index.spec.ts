import * as api from 'src/common/api'
import { getCandidates } from 'src/common/endpoints/candidates'

describe('common/endpoints/candidates', () => {
    describe('getCandidates', () => {
        let result

        beforeEach(() => {
            jest.spyOn(api, 'getData').mockImplementation(async () => ({
                data: [],
            }))
        })

        test('should call the api.getData', async () => {
            expect(await getCandidates()).toStrictEqual({ data: [] })
        })
    })
})
