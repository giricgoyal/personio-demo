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
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        dispatch(fetchCandidates())
    }, [])

    const handleSortChange = useCallback((sort) => {
        setSearchParams({ sort })
    }, [])

    const columns = getColumns()

    return (
        <>
            <Grid
                columnDef={columns}
                data={candidates}
                isLoading={isLoading}
                title="Applications"
                sortBy={searchParams.get('sort') ?? 'application_date'}
                onSortChange={handleSortChange}
            />
        </>
    )
}
