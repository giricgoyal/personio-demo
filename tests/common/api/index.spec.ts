import axios from 'axios'
import { getData } from 'src/common/api'

describe('commmon/api', () => {
    describe('getData', () => {
        let result
        beforeEach(async () => {
            jest.spyOn(axios, 'get').mockImplementation(async () => ({
                data: 'some data',
                status: 200,
            }))

            result = await getData('/some-path', { key: 'value' })
        })

        test('should call axios with correct arguments', () => {
            expect(axios.get).toHaveBeenCalledWith('http://personio-fe-test.herokuapp.com/api/v1//some-path', {
                params: { key: 'value' },
            })
        })

        test('should return correct data', () => {
            expect(result).toStrictEqual('some data')
        })
    })
})
