import React, { ReactElement, useCallback } from 'react'

type Option = {
    label: string
    value: string
}

type Props = {
    label?: string
    options: Array<Option>
    selected?: string
    onChange: (value: string) => void
    'data-testid'?: string
}

export default function Select(props: Props): ReactElement {
    const { label, options = [], onChange, selected } = props

    const handleOnChange = useCallback(
        (event) => {
            onChange(event.target.value)
        },
        [onChange],
    )

    return (
        <label className="select">
            <span className="select__label">{label}</span>
            <select
                data-testid={props?.['data-testid'] ?? 'select-input'}
                className="select__element"
                onChange={handleOnChange}
                defaultValue={selected}
            >
                {options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    )
}
