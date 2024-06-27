import { createStore } from 'vuex';

const store = createStore({
    state:{
        dataFormPersonal : {name: '', email: '', fone:''},
        dataFormDelivery : {zipCode: '', street: '', number: '', district: '', city: '', state: ''},
        dataProduct : {},
        carProduct: []
    },
    mutations: {
        setDataFormPersonal(state, data){
            state.dataFormPersonal = data;

        },
        setDataFormDelivery(state, data){
            state.dataFormDelivery = data;

        },
        setDataProduct(state, data){
            state.dataProduct = {...data};

        }
    },
    getters: {
        getDataFormPersonal(state){
            return state.dataFormPersonal;

        },
        getDataFormDelivery(state){
            return state.dataFormDelivery;

        },
        getDataProduct(state){
            return state.dataProduct;
            
        }
    }
})

export default store;