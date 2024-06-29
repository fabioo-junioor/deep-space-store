const fielsRequired = value => 
    (value != '') ? true : false;

const emailValidator = email => 
    (/.+@.+\..+/.test(email)) ? true : false;

const phoneValidator = phone => 
    ((phone.replace(/\D/g, '')).length === 11) ? true : false;

const cepValidator = cep => 
    (/^(\d{5}-\d{3}|\d{8})$/.test(cep.replace(/\D/g, ''))) ? true : false;

const cpfValidator = cpf => 
    ((cpf.replace(/\D/g, '')).length === 11) ? true : false;

const numCardValidator = num => 
    ((num.replace(/\D/g, '')).length === 16) ? true : false;

const codeCardValidator = code => 
    ((code.replace(/\D/g, '')).length === 3) ? true : false;

const validCardValidator = (date) => {
    if((date.replace(/\D/g, '')).length === 4){
        let monthInfo = parseInt(date.substring(0, 2));
        let yearInfo = parseInt(date.substring(3));

        let today = new Date();
        let month = today.getMonth() + 1;
        let year = parseInt(((today.getFullYear()).toString()).substring(2));
        
        if(yearInfo == 0){
            return false;
        }
        if((monthInfo > 12) || (monthInfo == 0)){
            return false;
        }
        if(yearInfo > year){
            return true;
        }
        if(yearInfo == year){
            if(monthInfo < month){
                return false;
            }
            return true;
        }
    }
    return false;
}

export {
    fielsRequired,
    emailValidator,
    phoneValidator,
    cepValidator,
    cpfValidator,
    numCardValidator,
    codeCardValidator,
    validCardValidator
}