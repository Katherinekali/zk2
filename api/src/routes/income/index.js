let Mongo = require("mongodb-curd")
module.exports = {
    addMoney(req, res, next) {
        Mongo.insert("record", "income", req.body, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "success",
                    data: result
                })
            }
        })
    },
    delMoney(req, res, next) {
        Mongo.insert("record", "pay", req.body, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "success",
                    data: result
                })
            }
        })
    }

}