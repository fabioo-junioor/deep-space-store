const getProduct = async (offer_code) => {
    try{
        const response = await fetch(`https://api.deepspacestore.com/offers/${offer_code}`, {
            method: 'GET',
            headers: { 'Content-Type' : 'application/json' },
        });
        const data = await response.json();
        return data;
            
    }catch(err){
        return err;

    }
}
const buyProduct = async (offer_code, data) => {
    try{
        const response = await fetch(`https://api.deepspacestore.com/offers/${offer_code}/create_order`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
        });
        const data = await response.json();
        return data;
            
    }catch(err){
        return err;

    }
}

export {
    getProduct,
    buyProduct
}