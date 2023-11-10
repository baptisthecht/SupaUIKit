import { createStore } from 'vuex';

const state = {
  searchModalVisible: false,
  MobileMenuVisibility: false,
};

const mutations = {
  showSearchModal(state) {
    state.searchModalVisible = true;
  },
  closeSearchModal(state) {
    state.searchModalVisible = false;
  },
  updateMobileMenuVisibility(state) {
    state.MobileMenuVisibility = !state.MobileMenuVisibility;
  },
};

const store = createStore({
  state,
  mutations,
});

export default store;
