const URL = 'http://192.168.2.20:3000/api'


/*
Creates an account on the chain
*/
export async function login(email) {

    email = email.replace('@', '%40');

    const url = URL + '/queries/selectAccountByEmail?email=' + email;

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(url, {
            method: 'GET',
            headers: new Headers({'Accept': 'application/json'}),
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}


/*
Creates an account on the chain
*/
export async function createAccount(account) {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/User', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json', 'Accept': 'application/json'}),
            body: JSON.stringify({
                $class: 'org.london.luc.User',
                idUser: account.idUser,
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
                phoneNumber: account.phoneNumber,
                consumption: account.consumption,
                admin: account.admin
            })
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}
/*
Gets LUCs for a user
*/
export async function getLUC(user) {

    const url = URL + '/queries/selectCoinByOwner?idUser=' + user.idUser;

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(url, {
            method: 'GET',
            headers: new Headers({'Accept': 'application/json'}),
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}

/*
Gets LUC to CAD conversion
*/
export async function getLUCtoCAD() {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/LUCtoCAD', {
            method: 'GET',
            headers: new Headers({'Accept': 'application/json'}),
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}

/*
Gets Wh to CAD conversion
*/
export async function getWhtoLUC() {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/WhtoLUC', {
            method: 'GET',
            headers: new Headers({'Accept': 'application/json'}),
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}

/*
Gets Wh to CAD conversion
*/
export async function getConsumption() {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/User', {
            method: 'GET',
            headers: new Headers({'Accept': 'application/json'}),
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}

/*
Gets trades
*/
export async function getTrades() {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/Trade', {
            method: 'GET',
            headers: new Headers({'Accept': 'application/json'}),
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}

/*
Gets trades
*/
export async function getAwards() {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/Trade', {
            method: 'GET',
            headers: new Headers({'Accept': 'application/json'}),
        })
            .then((response) => response.text())//Awaits response.
            .then((reply) => {

                console.log(reply);
                resolve(reply);

            })
            .catch((error) => {
                resolve(false);
                console.log(error);
            });
    });
}
