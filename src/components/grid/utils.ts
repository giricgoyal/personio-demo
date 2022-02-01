import { uniq } from 'lodash'
import { Column, Row } from '.'
import { FilterOption } from './filter'
import { SortOption } from './sort'

export const getSortableColumns = (columnDef: Array<Column>): Array<SortOption> =>
    columnDef
        .filter((col) => col.sort)
        .map((col) => ({
            label: col.title,
            value: col.propBinding,
        }))

const getSortParams = (
    sortBy: string,
): {
    col: string
    isDescending: boolean
} => {
    return {
        col: sortBy.replace('-', ''),
        isDescending: sortBy.includes('-'),
    }
}

export const getData = (data: Array<Row>, sortBy?: string | null, filterBy?: string | null): Array<Row> => {
    const filterByKey = filterBy?.split(':')[0]
    const filterByValue = filterBy?.split(':')[1]
    const filterFn =
        filterByKey && filterByValue
            ? (datum) => datum[filterByKey].toLowerCase().includes(filterByValue.toLowerCase())
            : (d) => d
    const filteredData = data.filter(filterFn)

    if (sortBy) {
        const { col, isDescending } = getSortParams(sortBy)

        filteredData.sort((a, b) => {
            if (a[col] > b[col]) {
                return isDescending ? -1 : 1
            } else {
                return isDescending ? 1 : -1
            }
        })
    }

    return filteredData
}

export const getFilterOptions = (colDefs: Array<Column>, data: Array<Row>): Array<FilterOption> =>
    colDefs.reduce((accum: Array<FilterOption>, col) => {
        if (col.filter) {
            accum.push({
                label: col.title,
                value: col.propBinding,
                filterValues: uniq(data.map((datum) => datum[col.propBinding])),
            })
        }

        return accum
    }, [])
