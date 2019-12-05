const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "User",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        firstname: {
            type: "varchar"
        },
        lastname: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "text"
        },
        dob: {
            type: "varchar"
        }
    }
});