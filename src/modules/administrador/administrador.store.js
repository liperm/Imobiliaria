import Vue from 'vue';

const state = Vue.observable({
  administrador: null,
});

export const mutations = {
  setAdministrador(administrador) {
    state.administrador = administrador;
  },
};

export const getters = {
  getAdministrador() {
    return state.administrador;
  },
};
