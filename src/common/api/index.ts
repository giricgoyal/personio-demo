import axios from 'axios'
import { CANDIDATE } from 'src/models/candidates/types'
import { API_BASE_URL } from './constants'

export type API_DATA = {
    data?: Array<CANDIDATE>
    error?: {
        code: number
        message: string
    }
}

export type AXIOS_RESPONSE = {
    data?: API_DATA
}

type params = {
    [key: string]: string
}

const getUrl = (path: string): string => `${API_BASE_URL}/${path}`

export const getData = async (path: string, params?: params): Promise<AXIOS_RESPONSE> => {
    const url = getUrl(path)
    const { data } = await axios.get(url, {
        params,
    })
    return data
}
