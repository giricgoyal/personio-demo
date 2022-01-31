export type CANDIDATE = {
    application_date?: string
    birth_date?: string
    email?: string
    id?: number
    name?: string
    position_applied?: string
    status?: string
    year_of_experience?: number
}

export type ACTION = {
    type: string
    payload?: {
        isLoading?: boolean
        data?: Array<CANDIDATE>
    }
}

export type CANDIDATE_STATE = {
    candidates: {
        data?: Array<CANDIDATE>
        isLoading?: boolean
    }
}
