import {createStore} from 'vuex';


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
    actions: {},
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



