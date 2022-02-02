import { uniq } from 'lodash'
import { Column, Row } from '.'
import { FilterBy, FilterOption } from './filter'
import { SortBy, SortOption } from './sort'

/**
 * Get sortable columns from column defs in {label, value} format
 * @param columnDef {Array<Object>} - Column definitions
 * @returns {Array<Object>} List of sortable column definitions as {label, value}
 */
export const getSortableColumns = (columnDef: Array<Column>): Array<SortOption> =>
    columnDef
        .filter((col) => col.sort)
        .map((col) => ({
            label: col.title,
            value: col.propBinding,
        }))

/**
 * Get column name and sort direction from the applied sort string
 * @param sortBy {string} - The sort by string (-)?(column-key)
 * @returns {sortByCol: string, isDescending: boolean}
 */
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

/**
 * Get filter column and filter value from the applied filter string
 * @param filterBy {string} - Filter string column:value
 * @returns {filterKey: string, filterValue: string}
 */
export const getFilterBy = (filterBy: FilterBy = ''): { filterKey: string; filterValue: string } => {
    const [filterKey, filterValue] = filterBy?.split(':') ?? ['', '']
    return {
        filterKey,
        filterValue,
    }
}

/**
 * Get the sorted and filtered grid data based on sort and filters applied
 * @param data {Array<Object>} - List of row data
 * @param sortBy {string} - The sort by string
 * @param filterBy {string} - The filter by string
 * @returns {Array<Object>} - The list of data rows, sorted and filtered according to sort and filter applied
 */
export const getData = (data: Array<Row>, sortBy?: SortBy, filterBy?: FilterBy): Array<Row> => {
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

/**
 * Get filter options from the column defitions with filter valus for each filter
 * @param colDefs {Array<Object>} - The Column definitions
 * @param data - {Array<Object>} - The row data
 * @returns {Array<Object>} - List of filter Options for the filters
 */
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
