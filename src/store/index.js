import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  // 用于保存全局共享的数据,
  state: state,
  // 用于获取全局共享的数据
  getters: getters,
  // 用于保存修改全局数据的方法
  mutations: mutations,
  // 用于保存触发mutations中保存的方法的方法
  actions: actions
})
