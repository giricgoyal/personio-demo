import React, { ReactElement } from 'react'
import Sort from '../sort'

type Props = {
    dataCount?: number
    title?: string
    totalCount?: number
}

export default function GridHeader(props: Props): ReactElement {
    const { dataCount, title, totalCount } = props
    return (
        <div className="grid__header">
            <div className="grid__header__left">
                <div className="grid__header__left__title">{title}</div>
                <div className="grid__header__left__data-count">
                    ({dataCount}/{totalCount})
                </div>
            </div>
            <div className="grid__header__right">
                <Sort />
            </div>
        </div>
    )
}
