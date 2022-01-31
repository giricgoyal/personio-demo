import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from 'src/components/grid'
import { fetchCandidates } from 'src/models/candidates/actions'
import { getCandidates, getIsLoading } from 'src/models/candidates/selectors'

export default function Applications(): React.ReactElement {
    const dispatch = useDispatch()
    const candidates = useSelector(getCandidates)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        console.log('dispatch')
        dispatch(fetchCandidates())
    }, [])

    console.log(isLoading, candidates)

    return (
        <>
            <Grid data={candidates} isLoading={isLoading} title="Applications" />
        </>
    )
}
