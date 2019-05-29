

/**************************
 *  QUERY STRING
 ***************************/


getQueryStringParamsUsingRegExp = (url) => {
    let params = {}, match = null;
    if (url && typeof url === 'string') {
        // info https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec
        const regExp = /([^?=&]+)(=([^&#]*))/g
        while (match = regExp.exec(url)) {
            params[match[1]] = match[3];
        }
    }
    return params;
};

getQueryStringParamsWithoutRegExp = (url) => {
    let params = {};
    if (url && typeof url === 'string') {
        let auxSplit = url.split('?');
        if (auxSplit.length > 1) {
            auxSplit = auxSplit[1].split('#');
            auxSplit = auxSplit[0].split('&');
            for (let i = 0; i < auxSplit.length; i++) {
                const paramSplit = auxSplit[i].split('=');
                if (paramSplit[0]) {
                    params[paramSplit[0]] = paramSplit[1];
                }
            }
        }
    }

    return params;
};

/**************************
 *  Credit Card
 ***************************/

 getCreditCardType = (cc) => {
     const cardsPatterns = {
         mastercard: {
             pattern:/^(5[1-5]\d{2}|22[2-9]\d{1}|2[3-7]\d{2})\d{12}$/,
             text: 'Mastercard'
         },
         visa: {
            pattern:/^4\d{12,14}$/,
            text: 'Visa'
        },
        american: {
            pattern:/^3[47]\d{13}$/,
            text: 'American Express'
        }
     }
     let type = null;
     for(card in cardsPatterns){
         type = cardsPatterns[card].pattern.test(cc) ? cardsPatterns[card].text : type;
     }
     return type;
 }


 /**************************
 *  Email
 ***************************/

isValidEmail = (email) => {
    return /^\s*[\w\-\+]+(\.[\w\-\+]+)*\@[\w\-\+]+\.[\w\-\+]+(\.[\w\-\+]+)*\s*$/.test(email);
}