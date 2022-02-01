import React, { ReactElement } from 'react'
import Icon from 'src/components/icon'

type Props = {
    error?: string
    onGridRefresh: () => void
}

export default function GridError(props: Props): ReactElement | null {
    const { error, onGridRefresh } = props

    if (!error) {
        return null
    }

    return (
        <div className="grid__error">
            {error}
            <div>
                <a onClick={onGridRefresh} data-testid="refresh-grid-button">
                    <Icon icon="refresh" size="medium" />
                </a>
            </div>
        </div>
    )
}
