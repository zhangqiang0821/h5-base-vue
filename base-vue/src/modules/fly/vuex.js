import api from '$g/api'
// import {alert} from '$js/utils'

/**
 * Created by 张强 on 2017/8/4.
 */
export default {
  state: {},
  mutations: {},
  actions: {
    async getFly({ state, commit, rootState }, params) {
      const config = {
        _loading: false
        // _hideGlobalError: true
      }
      params = { ...config, ...params }
      const { data } = await api.getFly(params)
      return data
    }
  },
  getters: {}
}
