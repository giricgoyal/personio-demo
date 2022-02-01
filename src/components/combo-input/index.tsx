import React, { ReactElement, useCallback } from 'react'
import Button from '../button'
import Icon from '../icon'

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

    const handleInputClear = useCallback(() => {
        onChange('')
    }, [onChange])

    return (
        <>
            <label className="combo-box">
                <input
                    data-testid={props?.['data-testid'] ?? 'input'}
                    placeholder={placeholder}
                    list={id}
                    value={value}
                    onChange={handleInputOnChange}
                />
                {value && (
                    <Button onClick={handleInputClear} type="tertiary" data-testid="combobox-value-clear">
                        <Icon icon="cross" />
                    </Button>
                )}
            </label>
            {dataList.length > 0 && (
                <datalist id={id}>
                    {dataList
                        .sort((a, b) => (a > b ? 1 : -1))
                        .map((option) => (
                            <option value={option} key={option} />
                        ))}
                </datalist>
            )}
        </>
    )
}
