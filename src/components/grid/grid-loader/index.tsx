import React, { ReactElement } from 'react'

type Props = {
    isLoading?: boolean
}

export default function GridLoader(props: Props): ReactElement | null {
    const { isLoading } = props
    if (!isLoading) {
        return null
    }

    return (
        <div className="grid__loading">
            <i className="fas fa-spinner fa-spin fa-2x"></i>
        </div>
    )
}
