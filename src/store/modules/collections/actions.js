import api from '@/apis/api'

const api_key = process.env.VUE_APP_API_KEY

/*
 *  GET 
 */
export const getCollection = async ({commit}, {id}) => {
    commit('GET_COLLECTION', null)
    const res = await api.get('/collection/'+ id + '?api_key=' + api_key + '&language=it-IT')
    commit('GET_COLLECTION', res.data)
}

export const getCollectionImages = async ({commit}, {id}) => {
    commit('GET_COLLECTION_IMAGES', null)
    const res = await api.get('/collection/'+ id + '/images?api_key=' + api_key)
    commit('GET_COLLECTION_IMAGES', res.data)
}