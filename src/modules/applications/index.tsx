import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from 'src/components/grid'
import { fetchCandidates } from 'src/models/candidates/actions'
import { getCandidates, getIsLoading } from 'src/models/candidates/selectors'
import { getColumns } from './utils'

export default function Applications(): React.ReactElement {
    const dispatch = useDispatch()
    const candidates = useSelector(getCandidates)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        dispatch(fetchCandidates())
    }, [])

    const columns = getColumns()

    return (
        <>
            <Grid columnDef={columns} data={candidates} isLoading={isLoading} title="Applications" />
        </>
    )
}
