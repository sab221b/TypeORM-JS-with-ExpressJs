class User {
    constructor(id, firstname, lastname, email, password, dob) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.dob = dob;
    }
}

module.exports = {
    User: User
};

