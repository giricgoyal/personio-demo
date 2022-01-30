import React, { ReactElement } from 'react'

type Props = {
    data: Array<any>
}

export default function Grid(props: Props): ReactElement {
    const { data } = props
    return <div>Grid</div>
}
