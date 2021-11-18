import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

export const searchShow = async ({commit}, {query, page}) => {
    const res = await api.get(
        '/search/multi?api_key=' + api_key 
        + '&language=it-IT' 
        + '&query=' + query 
        + '&page=' + page
    )
    commit('GET_RESULTS', res.data)
}