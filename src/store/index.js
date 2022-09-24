import {createStore} from 'vuex';
import axiosClient from "../axios";


const store = createStore({
    state: {
        user: {
            data: {},
        },
        front:{
            loading: false,
            data:[]
        },
    },
    getters: {},
    actions: {
        getFrontData({commit}){
            commit('frontLoading', true)
            return axiosClient.get(`/`)
            .then((res) => {
                commit('frontLoading', false)
                commit('frontData', res.data)
                return res;
            })
            .catch(error => {
                commit('frontLoading', false)
                return error;
            })
        }
    },
    mutations:{
        frontLoading: (state, loading) => {
            state.front.loading = loading;
        },
        frontData: (state, data) => {
            state.front.data = data;
        }
    },
    modules: {}
})

export default store;



