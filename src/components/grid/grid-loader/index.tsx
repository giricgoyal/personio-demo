import React, { ReactElement } from 'react'
import Icon from 'src/components/icon'

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
            <Icon icon="spinner" spin size="medium" />
        </div>
    )
}
