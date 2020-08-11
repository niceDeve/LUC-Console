export function User(idUser, firstName, lastName, email, phoneNumber, password) {
    this.idUser = idUser;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
}

export function Transaction(transactionId, amount, timestamp) {
    this.transactionId = transactionId;
    this.amount = amount;
    this.timestamp = timestamp;
}
