import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Grid from 'src/components/grid'
import { fetchCandidates } from 'src/models/candidates/actions'
import { getCandidates, getIsLoading } from 'src/models/candidates/selectors'
import { getColumns } from './utils'

export default function Applications(): React.ReactElement {
    const dispatch = useDispatch()
    const candidates = useSelector(getCandidates)
    const isLoading = useSelector(getIsLoading)
    const [searchParams, setSearchParams] = useSearchParams({
        sort: 'application_date',
    })

    useEffect(() => {
        dispatch(fetchCandidates())
    }, [])

    const handleSortChange = useCallback(
        (sort) => {
            const oldSearchParams: { filter?: string } = {}
            const appliedFilters = searchParams.get('filter')
            if (appliedFilters) {
                oldSearchParams.filter = appliedFilters
            }
            setSearchParams({ sort, ...oldSearchParams })
        },
        [searchParams],
    )

    const handleFilterChange = useCallback(
        (filter) => {
            const oldSearchParams: { sort?: string } = {}
            const appliedSort = searchParams.get('sort')
            if (appliedSort) {
                oldSearchParams.sort = appliedSort
            }
            setSearchParams({ filter, ...oldSearchParams })
        },
        [searchParams],
    )

    const columns = getColumns()

    return (
        <>
            <Grid
                columnDef={columns}
                data={candidates}
                isLoading={isLoading}
                title="Applications"
                sortBy={searchParams.get('sort')}
                filterBy={searchParams.get('filter')}
                onSortChange={handleSortChange}
                onFilterChange={handleFilterChange}
            />
        </>
    )
}
