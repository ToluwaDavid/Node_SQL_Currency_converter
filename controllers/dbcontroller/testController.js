// import db from '../../models/models'
const db = require('../../models/models')

const Test = db.test

const addTest = async (req, res) => {
    let info = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }

    const test = await Test.create(info)
    res.status(200).send(test)
}

// Get all test

const getAllTest = async (req, res) => {
    let tests = await Test.findAll({})
    res.status(200).send(tests)
}

//Get one test
const getOneTest = async (req, res) => {
    let id = req.params.id
    let test = await Test.findOne({ where: { id: id } })
    res.status(200).send(test)
}

//update one

const updateTest = async (req, res) => {
    let id = req.params.id
    const test = await Test.update(req.body, { where: { id: id } })
    res.status(200).send(test)

}

//delete Product
const deleteTest = async (req, res) => {
    let id = req.params.id
    await Test.destroy({ where: { id: id } })
    res.status(200).send('Product is deleted')
}

module.exports = {
    addTest,
    getAllTest,
    getOneTest,
    updateTest,
    deleteTest
}
