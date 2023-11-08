import { createStore } from 'vuex';

const state = {
  searchModalVisible: false,
};

const mutations = {
  showSearchModal(state) {
    state.searchModalVisible = true;
  },
  closeSearchModal(state) {
    state.searchModalVisible = false;
  },
};

const store = createStore({
  state,
  mutations,
});

export default store;
