import React, { ReactElement, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Grid from 'src/components/grid'
import { fetchCandidates } from 'src/models/candidates/actions'
import { getCandidates, getError, getIsLoading } from 'src/models/candidates/selectors'
import { getColumns } from './utils'

export default function Applications(): ReactElement {
    const dispatch = useDispatch()
    const candidates = useSelector(getCandidates)
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)
    const [searchParams, setSearchParams] = useSearchParams({
        sort: '-application_date',
        filter: 'name:',
    })

    useEffect(() => {
        dispatch(fetchCandidates())
    }, [dispatch])

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
            const oldSearchParams: { sort?: string; filter?: string } = {}
            const appliedSort = searchParams.get('sort')
            if (appliedSort) {
                oldSearchParams.sort = appliedSort
            }
            if (filter) {
                oldSearchParams.filter = filter
            }
            setSearchParams(oldSearchParams)
        },
        [searchParams],
    )

    const handleGridRefresh = useCallback(() => {
        dispatch(fetchCandidates())
    }, [dispatch])

    const columns = getColumns()

    return (
        <Grid
            columnDef={columns}
            data={candidates}
            error={error}
            isLoading={isLoading}
            title="Applications"
            sortBy={searchParams.get('sort') ?? ''}
            filterBy={searchParams.get('filter') ?? ''}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
            onGridRefresh={handleGridRefresh}
        />
    )
}
