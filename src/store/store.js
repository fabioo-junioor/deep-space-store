import { createStore } from 'vuex';

const store = createStore({
    state:{
        dataFormPersonal: {name: '', email: '', fone:''},
        dataFormDelivery : {zipCode: '', street: '', number: '', district: '', city: '', state: ''}
    },
    mutations: {
        setDataFormPersonal(state, data){
            state.dataFormPersonal = data;

        },
        setDataFormDelivery(state, data){
            state.dataFormDelivery = data;

        }
    },
    getters: {
        getDataFormPersonal(state){
            return state.dataFormPersonal;

        },
        getDataFormDelivery(state){
            return state.dataFormDelivery;

        }
    }
})

export default store;