import { call, put } from 'redux-saga/effects'
import { setCandidatesData, setError, setIsLoading } from 'src/models/candidates/actions'
import { fetchCandidates } from 'src/models/candidates/sagas'
import { getCandidates } from 'src/common/endpoints/candidates'

describe('models/candidates/sagas', () => {
    describe('fetchCandidates()', () => {
        describe('on success', () => {
            const gen = fetchCandidates()

            test('should put isloading true', () => {
                expect(gen.next().value).toStrictEqual(put(setIsLoading(true)))
            })

            test('should call getCandidates ', () => {
                expect(gen.next().value).toStrictEqual(call(getCandidates))
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

            test('should put setError false', () => {
                expect(gen.next().value).toStrictEqual(put(setError('')))
            })

            test('should put isloading false', () => {
                expect(gen.next().value).toStrictEqual(put(setIsLoading(false)))
            })
        })

        describe('on error', () => {
            const gen = fetchCandidates()

            test('should put isloading true', () => {
                expect(gen.next().value).toStrictEqual(put(setIsLoading(true)))
            })

            test('should call getData ', () => {
                expect(gen.next().value).toStrictEqual(call(getCandidates))
            })

            test('should put setError false', () => {
                expect(
                    gen.next({
                        error: {
                            code: 500,
                            message: 'An error occured',
                        },
                    }).value,
                ).toStrictEqual(put(setError('An error occured')))
            })

            test('should put isloading false', () => {
                expect(gen.next().value).toStrictEqual(put(setIsLoading(false)))
            })
        })
    })
})
