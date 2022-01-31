import { call, put } from 'redux-saga/effects'
import { getData } from 'src/common/api'
import { setCandidatesData, setIsLoading } from 'src/models/candidates/actions'
import { fetchCandidates } from 'src/models/candidates/sagas'
import * as api from 'src/common/api'

describe('models/candidates/sagas', () => {
    beforeEach(() => {
        jest.spyOn(api, 'getData').mockImplementation(async () => ({
            data: [
                {
                    name: 'john doe',
                },
            ],
        }))
    })

    describe('fetchCandidates()', () => {
        const gen = fetchCandidates()

        test('should put isloading true', () => {
            expect(gen.next().value).toStrictEqual(put(setIsLoading(true)))
        })

        test('should call getData ', () => {
            expect(gen.next().value).toStrictEqual(call(api.getData, 'candidates'))
        })

        test('should put candidate data', () => {
            expect(
                gen.next({
                    data: [
                        {
                            name: 'john doe',
                        },
                    ],
                }).value,
            ).toStrictEqual(put(setCandidatesData([{ name: 'john doe' }])))
        })

        test('should put isloading false', () => {
            expect(gen.next().value).toStrictEqual(put(setIsLoading(false)))
        })
    })
})
