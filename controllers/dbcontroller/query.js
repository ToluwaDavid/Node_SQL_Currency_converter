// import conn from "../services/db.js";
const { connection } = require("mongoose");
const conn = require("../../services/db.js")

//ADDS USERS TO THE DATABASE
exports.adduser = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('INSERT INTO users SET first_name= ?, last_name = ?, email = ?, password = ? ', [firstname, lastname, email, password], (err, rows) => {
            if (!err) {
                res.json(rows)
                // return rows
            } else {
                return err
            }
        })
    })
}

//VIEW ALL USERS
exports.viewusers = (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM users', (err, rows) => {
            connection.release();
            if (!err) {
                res.json(rows)
            }
            else {
                res.json(err)
            }
        })
    })
}



//ADDS A CURRENCY AND ITS DETAILS TO THE DATABASE
exports.addcurrency = (req, res) => {
    const { currencyname, symbol, description } = req.body;
    conn.getConnection((err, connection) => {
        // connection.release()
        if (err) throw err;
        connection.query('INSERT INTO currency SET currencyname= ?, symbol = ?, description = ? ', [currencyname, symbol, description], (err, rows) => {
            connection.release()
            if (!err) {
                res.json(rows)
                // return rows
            } else {
                return err
            }
        })
    })
}

//ADDS A CURRENCY PAIR AND ITS DETAILS TO THE DATABASE
exports.addcurrencypair = (req, res) => {
    const { currencyone, symbolone, descriptionone, currencytwo, symboltwo, descriptiontwo, exchangerate } = req.body;
    conn.getConnection((err, connection) => {
        // connection.release()
        if (err) throw err;
        connection.query('INSERT INTO currencypair SET currencyone= ?, symbolone= ?, descriptionone= ?, currencytwo= ?, symboltwo= ? , descriptiontwo= ?, exchangerate= ? ', [currencyone, symbolone, descriptionone, currencytwo, symboltwo, descriptiontwo, exchangerate], (err, rows) => {
            connection.release()
            if (!err) {
                res.json(rows)
                // return rows
            } else {
                return err
            }
        })
    })
}

//VIEW ALL CURRENCIES
exports.viewcurrencies = (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM currency', (err, rows) => {
            connection.release();
            if (!err) {
                res.json(rows)
            }
            else {
                res.json(err)
            }
        })
    })
}

//CONVERT PAIR
exports.convertpair = (req, res) => {
    const { currencypair, amount } = req.body
    conn.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT exchangerate FROM currencypair WHERE currencypair= ?', [currencypair], (err, rows) => {
            connection.release();
            if (!err) {
                data = rows[0]["exchangerate"]
                exchangerate = parseInt(data)
                newamount = parseInt(amount)

                finalamount = exchangerate * newamount
                res.json('The estimated amount is ' + finalamount)
            }
            else {
                res.json(err)
            }
        })
    })
}



