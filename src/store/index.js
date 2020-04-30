import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    videoPlayingID: undefined
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setVideoPlaying(state, videoPlaying){
      state.videoPlayingID = videoPlaying;      
    }
  }
})