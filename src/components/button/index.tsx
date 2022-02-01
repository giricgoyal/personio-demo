import classNames from 'classnames'
import React, { ReactElement } from 'react'

type Props = {
    children: ReactElement | string
    type?: string
    onClick: () => void
    ['data-testid']?: string
}

export default function Button(props: Props): ReactElement {
    const { children, onClick, type = 'primary' } = props

    const className = classNames({
        button: true,
        [`button--${type}`]: type,
    })

    return (
        <button data-testid={props?.['data-testid'] ?? 'button'} className={className} onClick={onClick}>
            {children}
        </button>
    )
}
