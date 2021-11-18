import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET SEASON LIST 
 */
export const getSeasons = async ({commit}, {id}) => {
    commit('GET_SEASONS', null)
    const res = await api.get('/tv/' + id + '/seasons?api_key=' + api_key + '&language=it-IT')
    commit('GET_SEASONS', res.data)
}

/*
 *  GET SINGLE SEASON 
 */
export const getSeason = async ({commit}, {id, number}) => {
    commit('GET_SEASON', null)
    const res = await api.get('/tv/' + id + '/season/' + number + '?api_key=' + api_key + '&language=it-IT')
    commit('GET_SEASON', res.data)
}