import { getData, getSortableColumns } from 'src/components/grid/utils'

describe('components/grid/utils', () => {
    describe('getSortableColumns()', () => {
        const colDef = [
            {
                title: 'col 1',
                propBinding: 'col1',
                sort: true,
            },
            {
                title: 'col 2',
                propBinding: 'col2',
            },
        ]
        test('should return sortable columns', () => {
            expect(getSortableColumns(colDef)).toStrictEqual([
                {
                    label: 'col 1',
                    value: 'col1',
                },
            ])
        })
    })

    describe('getData()', () => {
        const data = [
            {
                application_date: '2018-01-01',
                name: 'john doe',
            },
            {
                application_date: '2018-02-01',
                name: 'jane doe',
            },
        ]
        test('should return sorted and filtered data', () => {
            expect(getData(data, '-application_date')).toStrictEqual([
                {
                    application_date: '2018-02-01',
                    name: 'jane doe',
                },
                {
                    application_date: '2018-01-01',
                    name: 'john doe',
                },
            ])
        })
    })
})
