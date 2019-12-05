const typeorm = require("typeorm");
const User = require("../entities/UserSchema");

const createUser = (req, res) => {
    const userRepository = typeorm.getManager().getRepository(User);
    userRepository.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                res.status(401).send({ error: 'email already exists' });
            } else {
                if (req.body.email && req.body.password && req.body.firstname
                    && req.body.lastname && req.body.dob) {
                    const newUser = userRepository.create(req.body);
                    userRepository.save(newUser)
                        .then((user) => {
                            res.status(201).send(user);
                        }).catch((err) => {
                            res.status(400).send('error creating user', err);
                        })
                } else {
                    res.status(400).send({'message': 'missing required fields'});
                }
            }
        }).catch((err) => res.status(400).send('error creating user', err));
}

const getUsers = (req, res) => {
    const userRepository = typeorm.getManager().getRepository(User);
    userRepository.find()
        .then((users) => {
            res.status(201).send(users);
        }).catch((err) => {
            res.status(400).send('error fetching user', err);
        })
}

const getUserById = (req, res) => {
    const userRepository = typeorm.getManager().getRepository(User);
    userRepository.findByIds(req.params.id)
        .then((user) => {
            res.status(201).send(user);
        }).catch((err) => {
            res.status(400).send('error fetching user', err);
        })
}

const deleteUserByID = (req, res) => {
    const userRepository = typeorm.getManager().getRepository(User);
    userRepository.findOne({ id: req.params.id })
        .then((user) => {
            if (user) {
                userRepository.remove(user)
                    .then(() => {
                        res.status(201).send({ message: 'user deleted successfully' });
                    })
            } else {
                res.status(400).send({ message: 'user with the given id is not found' })
            }
        }).catch((err) => {
            res.status(400).send('error fetching user', err);
        })
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUserByID
}