import axios from 'axios'
import { API_BASE_URL } from './constants'

export type API_DATA = {
    [key: string]: Record<string, unknown>[]
}

export type AXIOS_RESPONSE = {
    data?: API_DATA
}

type Params = {
    [key: string]: string
}

/**
 * Get api url with path
 *
 * @param path {string} - the path string
 * @returns {string} - the api url
 */
const getUrl = (path: string): string => `${API_BASE_URL}/${path}`

/**
 * Get data from the api.
 *
 * @param path {string} resource path
 * @param params {Object} - The query parameters
 * @returns {Promise} - Promise that resolves to api data.
 */
export const getData = async (path: string, params?: Params): Promise<API_DATA> => {
    const url = getUrl(path)
    const { data } = await axios.get(url, {
        params,
    })
    return data
}
