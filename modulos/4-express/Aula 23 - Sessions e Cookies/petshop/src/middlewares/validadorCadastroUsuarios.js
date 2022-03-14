const { check } = require('express-validator');

module.exports = [
  check('nome')
    .notEmpty().withMessage('Campo nome é obrigatório!').bail()
    .isLength({ min: 3 }).withMessage('Campo nome precisa ter mais que 3 caracteres'),
  check('email')
    .notEmpty().withMessage('Campo email é obrigatório!').bail()
    .isEmail().withMessage('Campo valor precisa ser um email'),
  check('senha')
    .notEmpty().withMessage('Campo senha é obrigatório').bail()
    .isLength({ min: 10 }).withMessage('Campo senha precisa ter mais que 10 caracteres!')
]