const { check, validationResult } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),
    check("brand")
    .exists()
    .notEmpty(),
    check("description")
    .exists()
    .notEmpty(),
    check("price")
    .exists()
    .notEmpty(),
    check("category")
    .exists()
    .notEmpty(),
    check("photoId")
    .exists()
    .notEmpty()
    .isMongoId(),

    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),

    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateItem, validatorGetItem }