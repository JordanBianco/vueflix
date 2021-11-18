import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET 
 */
export const getReview = async ({commit}, {id}) => {
    commit('GET_REVIEW', null)
    const res = await api.get('/review/' + id + '?api_key=' + api_key)
    commit('GET_REVIEW', res.data)
    console.log(res)
}