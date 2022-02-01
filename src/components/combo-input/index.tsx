import React, { ReactElement, useCallback } from 'react'

type Props = {
    id: string
    onChange: (value: string) => void
    placeholder?: string
    dataList?: Array<string | number>
    'data-testid'?: string
    value?: string
}

export default function ComboBox(props: Props): ReactElement {
    const { dataList = [], placeholder, id, onChange, value } = props

    const handleInputOnChange = useCallback(
        (event) => {
            onChange(event.target.value)
        },
        [onChange],
    )

    return (
        <>
            <input
                data-testid={props?.['data-testid'] ?? 'input'}
                className="combo-box"
                placeholder={placeholder}
                list={id}
                value={value}
                onChange={handleInputOnChange}
            />
            {dataList.length > 0 && (
                <datalist id={id}>
                    {dataList.map((option) => (
                        <option value={option} key={option} />
                    ))}
                </datalist>
            )}
        </>
    )
}
