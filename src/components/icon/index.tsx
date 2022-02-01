import classNames from 'classnames'
import React, { ReactElement } from 'react'

type Props = {
    icon: string
    size?: string
    spin?: boolean
}

const ICON_MAPPER = {
    filter: 'fas fa-filter',
    sort: 'fas fa-sort',
    refresh: 'fas fa-sync',
    spinner: 'fas fa-spinner',
    'arrow-up': 'fas fa-arrow-up',
    'arrow-down': 'fas fa-arrow-down',
}

const SIZE_MAPPER = {
    small: '',
    medium: 'fa-2x',
    large: 'fa-3x',
}

export default function Icon(props: Props): ReactElement | null {
    const { icon, size = 'small', spin } = props

    if (!ICON_MAPPER[icon]) {
        return null
    }

    const className = classNames({
        [ICON_MAPPER[icon]]: icon,
        [SIZE_MAPPER[size]]: size,
        'fa-spin': spin,
    })

    return <i className={className}></i>
}
