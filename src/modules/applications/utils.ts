import { startCase } from 'lodash'
import { Column } from 'src/components/grid'

export const getColumns = (): Array<Column> => [
    {
        title: 'Id',
        propBinding: 'id',
        type: 'number',
    },
    {
        title: 'Name',
        propBinding: 'name',
        filter: true,
        type: 'string',
    },
    {
        title: 'Email',
        propBinding: 'email',
        type: 'string',
    },
    {
        title: 'Birth Date',
        propBinding: 'birth_date',
        type: 'date',
    },
    {
        title: 'Application Date',
        propBinding: 'application_date',
        sort: true,
        type: 'date',
    },
    {
        title: 'Position Applied',
        propBinding: 'position_applied',
        sort: true,
        filter: true,
        type: 'string',
    },
    {
        title: 'Status',
        propBinding: 'status',
        filter: true,
        type: 'string',
        format: (value) => startCase(`${value}`),
    },
    {
        title: 'Years of Experience',
        propBinding: 'year_of_experience',
        sort: true,
        type: 'number',
    },
]
