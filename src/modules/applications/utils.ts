import { Column } from 'src/components/grid'

export const getColumns = (): Array<Column> => [
    {
        title: 'Id',
        propBinding: 'id',
    },
    {
        title: 'Name',
        propBinding: 'name',
    },
    {
        title: 'Email',
        propBinding: 'email',
    },
    {
        title: 'Birth Date',
        propBinding: 'birth_date',
    },
    {
        title: 'Application Date',
        propBinding: 'application_date',
        sort: true,
    },
    {
        title: 'Position Applied',
        propBinding: 'position_applied',
        sort: true,
    },
    {
        title: 'Status',
        propBinding: 'status',
    },
    {
        title: 'Years of experience',
        propBinding: 'year_of_experience',
        sort: true,
    },
]
