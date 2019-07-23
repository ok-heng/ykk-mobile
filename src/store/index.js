import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    status: '',
    token: window.localStorage.getItem('token'),
    username: ''
}
const mutations = {
    LOGIN: function (state, data) {
        state.token = data;
        window.localStorage.setItem('token', data);
    },
    LOGOUT: function(state) {
        state.token = null;
        window.localStorage.removeItem('token');
    },
    USERNAME: function(state, data) {
        state.username = data;
        window.localStorage.setItem('username', data);
    }
}
const actions = {
    UserLogin: ({commit}, data) => {
        commit('LOGIN', data);
    },
    UserLogout: ({commit}) => {
        commit(LOGOUT);
    },
    UserName: ({commit}, data) => {
        commit('USERNAME', data);
    }
}
const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})