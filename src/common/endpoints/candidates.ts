import { CANDIDATE } from 'src/models/candidates/types'
import { getData } from '../api'

export type CANDIDATE_RESPONSE = {
    data?: CANDIDATE[]
    error?: {
        code?: number
        message?: string
    }
}

export const getCandidates = (): Promise<CANDIDATE_RESPONSE> => getData('candidates')
