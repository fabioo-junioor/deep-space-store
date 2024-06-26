const getCepUser = async (cep) => {
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
           
        });
        const data = await response.json();
        if(data.cep){
            return data;
            
        }
    }catch(err){
        return null;

    }
}

export {
    getCepUser
}