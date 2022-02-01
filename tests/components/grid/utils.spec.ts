import { getData, getFilterBy, getFilterOptions, getSortableColumns, getSortParams } from 'src/components/grid/utils'

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

        test('should return sorted data', () => {
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

        test('should return sorted data and filtered data', () => {
            expect(getData(data, '-application_date', 'name:jane')).toStrictEqual([
                {
                    application_date: '2018-02-01',
                    name: 'jane doe',
                },
            ])
        })
    })

    describe('getSortParams()', () => {
        test('should return correct data', () => {
            expect(getSortParams('-column1')).toStrictEqual({
                sortByCol: 'column1',
                isDescending: true,
            })
        })
    })

    describe('getFilterBy()', () => {
        test('should return correct data', () => {
            expect(getFilterBy('key:value')).toStrictEqual({
                filterKey: 'key',
                filterValue: 'value',
            })
        })
    })

    describe('getFilterOptions()', () => {
        const colDefs = [
            {
                title: 'Name',
                propBinding: 'name',
                filter: true,
            },
            {
                title: 'Application Date',
                propBinding: 'application_date',
            },
        ]

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

        test('should return correct filter options', () => {
            expect(getFilterOptions(colDefs, data)).toStrictEqual([
                {
                    label: 'Name',
                    value: 'name',
                    filterValues: ['john doe', 'jane doe'],
                },
            ])
        })
    })
})
