import state from '@/store/modules/movies/state'
import * as actions from '@/store/modules/movies/actions'
import * as mutations from '@/store/modules/movies/mutations'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}