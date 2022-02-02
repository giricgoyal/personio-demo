import { uniq } from 'lodash'
import { Column, Row } from '.'
import { FilterBy, FilterOption } from './filter'
import { SortBy, SortOption } from './sort'

export const getSortableColumns = (columnDef: Array<Column>): Array<SortOption> =>
    columnDef
        .filter((col) => col.sort)
        .map((col) => ({
            label: col.title,
            value: col.propBinding,
        }))

export const getSortParams = (
    sortBy: SortBy,
): {
    sortByCol: string
    isDescending: boolean
} => {
    return {
        sortByCol: (sortBy || '').replace('-', ''),
        isDescending: (sortBy || '').includes('-'),
    }
}

export const getFilterBy = (filterBy: FilterBy = ''): { filterKey: string; filterValue: string } => {
    const [filterKey, filterValue] = filterBy?.split(':') ?? ['', '']
    return {
        filterKey,
        filterValue,
    }
}

export const getData = (data: Array<Row>, sortBy?: string | null, filterBy?: FilterBy): Array<Row> => {
    const { filterKey, filterValue } = getFilterBy(filterBy)
    const filterFn =
        filterKey && filterValue
            ? (datum) => datum[filterKey].toLowerCase().includes(filterValue.toLowerCase())
            : (d) => d
    const filteredData = data.filter(filterFn)

    if (sortBy) {
        const { sortByCol, isDescending } = getSortParams(sortBy)

        filteredData.sort((a, b) => {
            if (a[sortByCol] > b[sortByCol]) {
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
        const { filter, title, propBinding, format = (val) => val } = col
        if (filter) {
            accum.push({
                label: title,
                value: propBinding,
                filterValues: uniq(data.map((datum) => format(datum[propBinding]))),
            })
        }

        return accum
    }, [])
