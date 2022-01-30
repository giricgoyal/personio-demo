import axios from 'axios'
import { API_BASE_URL } from './constants'

type AXIOS_RESPONSE = {
    data
}

const getUrl = (path: string): string => `${API_BASE_URL}/${path}`

export const getData = async (path: string, params?: any): Promise<AXIOS_RESPONSE> => {
    const url = getUrl(path)
    const { data } = await axios.get(url, {
        params,
    })
    return data
}
