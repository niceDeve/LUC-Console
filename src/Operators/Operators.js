const URL = 'http://192.168.2.73:3000/api'


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

    const url = URL + '/queries/selectCoinByOwner?idUser=resource%3Aorg.london.luc.User%23' + user.idUser;

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
export async function getTrades(user) {

    const url = URL + "/queries/selectTradesByUserId?idUser=resource%3Aorg.london.luc.User%23" + user.idUser;

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
Gets awards
*/
export async function getAwards(user) {

    const url = URL + '/queries/selectAwardsByUserId?idUser=resource%3Aorg.london.luc.User%23' + user.idUser;

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
Set LUCtoCAD conversion
 */
export async function createLUCtoCAD(conversion) {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/LUCtoCAD', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json', 'Accept': 'application/json'}),
            body: JSON.stringify({
                $class: 'org.london.luc.LUCtoCAD',
                idLUCtoCAD: 'LUCtoCAD_' + Date.now(),
                conversion: conversion,
                timestamp: Date.now()
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
Set WhtoLUC conversion
 */
export async function createWhtoLUC(conversion) {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/WhtoLUC', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json', 'Accept': 'application/json'}),
            body: JSON.stringify({
                $class: 'org.london.luc.WhtoLUC',
                idWhtoLUC: 'WhtoLUC_' + Date.now(),
                conversion: conversion,
                timestamp: Date.now()
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
Awards LUC to a user
 */
export async function awardCoin(user) {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/AwardCoin', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json', 'Accept': 'application/json'}),
            body: JSON.stringify({
                $class: 'org.london.luc.AwardCoin',
                owner: user.idUser,
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
Transfers LUC
@TODO, fix this?
 */
export async function trade(newUser, oldUser) {

    return new Promise((resolve, reject) => {
        //Sends request to server.
        fetch(URL + '/Trade', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json', 'Accept': 'application/json'}),
            body: JSON.stringify({
                $class: 'org.london.luc.Trade',
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

