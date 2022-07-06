import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import time from './modules/time'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    time
  },
  getters
})

export default store
