export function User(idUser, firstName, lastName, email, phoneNumber, password, consumption, admin) {
    this.idUser = 'USER_' + idUser;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.consumption = consumption;
    this.admin = admin;
}

export function Transaction(transactionId, amount, type, timestamp) {
    this.transactionId = transactionId;
    this.amount = amount;
    this.type = type;
    this.timestamp = timestamp;
}
