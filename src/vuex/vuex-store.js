/**
 * Created by artpoddybnyy on 02.12.2017.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    picLinks: []
  },
  mutations: {
    addLinks (state, links) {
        state.picLinks = links;
    },
  },
  getters: {
    showSlider (state) {
      if (state.picLinks.length > 0) {
        return true;
      } else { return false}
    }
  }

})
