import Vue from 'vue'
import Vuex from 'vuex'
import Universal from './modules/Universal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Universal
  }
})
