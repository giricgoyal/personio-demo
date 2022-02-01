import React, { ReactElement } from 'react'

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
                    <i className="fas fa-sync fa-2x"></i>
                </a>
            </div>
        </div>
    )
}
