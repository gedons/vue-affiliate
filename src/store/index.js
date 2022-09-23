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
    mutations:{},
    modules: {}
})

export default store;



