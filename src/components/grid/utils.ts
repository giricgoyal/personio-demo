import { Column, Row } from '.'

export const getSortableColumns = (
    columnDef: Array<Column>,
): Array<{
    label: string
    value: string
}> =>
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

export const getData = (data: Array<Row>, sortBy?: string | null): Array<Row> => {
    const filteredData = data.filter((datum) => datum)

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
