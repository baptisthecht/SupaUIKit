import { createStore } from 'vuex';

const state = {
  searchModalVisible: false,
  recentSearches: [],
};

const mutations = {
  showSearchModal(state) {
    state.searchModalVisible = true;
  },
  closeSearchModal(state) {
    state.searchModalVisible = false;
  },
  setRecentsSearches(state, recents) {
    state.recentSearches = recents;
  }
};

const store = createStore({
  state,
  mutations,
});

export default store;
