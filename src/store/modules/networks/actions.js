import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET DETAILS 
 */
export const getNetwork = async ({commit}, {id}) => {
    commit('GET_NETWORK', null)
    const res = await api.get('/network/' + id + '?api_key=' + api_key)
    commit('GET_NETWORK', res.data)
}

export const getNetworkShows = async ({commit}, {id, page}) => {
    commit('GET_SHOWS', null)
    const res = await api.get('/discover/tv?api_key=' + api_key + '&language=it-IT& with_networks=' + id + '&page=' + page)
    commit('GET_SHOWS', res.data)
}