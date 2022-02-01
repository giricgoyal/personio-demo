import React, { ReactElement, useCallback } from 'react'

type Props = {
    id: string
    onChange: (value: string) => void
    placeholder?: string
    dataList?: Array<string>
    'data-testid'?: string
}

export default function ComboBox(props: Props): ReactElement {
    const { dataList = [], placeholder, id, onChange } = props

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
                onChange={handleInputOnChange}
            />
            {dataList.length && (
                <datalist id={id}>
                    {dataList.map((option) => (
                        <option value={option} />
                    ))}
                </datalist>
            )}
        </>
    )
}
