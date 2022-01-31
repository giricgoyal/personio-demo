import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from 'src/components/grid'
import { fetchCandidates } from 'src/models/candidates/actions'
import { getCandidates } from 'src/models/candidates/selectors'

export default function Applications(): React.ReactElement {
    const dispatch = useDispatch()
    const candidates = useSelector(getCandidates)

    useEffect(() => {
        console.log('dispatch')
        dispatch(fetchCandidates())
    }, [])

    console.log(candidates)

    return (
        <>
            <Grid data={candidates} />
        </>
    )
}
