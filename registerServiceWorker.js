if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js')
        .then(function(registration) {
            console.log('Registro realizado no escopo: ', registration.scope);
        })
        .catch(function(error){
            console.log('Registro falhou: ', error);
        })
}