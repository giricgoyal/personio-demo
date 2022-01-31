import React, { ReactElement } from 'react'
import Sort from '../sort'

type Column = {
    label: string
    value: string
}

type Props = {
    dataCount: number
    title: string
    totalCount: number
    sortableColumns: Array<Column>
    sortBy: string | null
    onSortChange: (value: string) => void
}

export default function GridHeader(props: Props): ReactElement {
    const { dataCount, sortableColumns, title, totalCount, sortBy, onSortChange } = props

    return (
        <div className="grid__header">
            <div className="grid__header__left">
                <div className="grid__header__left__title">{title}</div>
                <div className="grid__header__left__data-count">
                    ({dataCount}/{totalCount})
                </div>
            </div>
            <div className="grid__header__right">
                <Sort sortOptions={sortableColumns} onChange={onSortChange} sortBy={sortBy} />
            </div>
        </div>
    )
}
