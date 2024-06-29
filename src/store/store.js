import { createStore } from 'vuex';

const store = createStore({
    state:{
        dataFormPersonal: {},
        dataFormDelivery: {},
        dataFormPayment: {},
        dataProduct: {},
        dataBuy: {},
        alert: {
            isAlert: false,
            text: '',
            title: '',
            type: ''
        }
    },
    mutations: {
        setDataFormPersonal(state, data){
            state.dataFormPersonal = {...data};

        },
        setDataFormDelivery(state, data){
            state.dataFormDelivery = {...data};

        },
        setDataFormPayment(state, data){
            state.dataFormPayment = {...data};

        },
        setDataProduct(state, data){
            state.dataProduct = {...data}; 

        },
        setDataBuy(state, data){
            state.dataBuy = {...data}; 

        },
        setAlert(state, data){
            state.alert.isAlert = data.isAlert;
            state.alert.text = data.text;
            state.alert.title = data.title;
            state.alert.type = data.type;

        },
        removeAlert(state){
            setTimeout(() => {
                state.alert.isAlert = false;

            }, 3000)
        }
    },
    getters: {
        getDataFormPersonal(state){
            return state.dataFormPersonal;

        },
        getDataFormDelivery(state){
            return state.dataFormDelivery;

        },
        getDataFormPayment(state){
            return state.dataFormPayment;

        },
        getDataProduct(state){
            return state.dataProduct;
            
        },
        getDataBuy(state){
            return state.dataBuy;

        },
        getAlert(state){
            return state.alert;

        }
    }
})

export default store;