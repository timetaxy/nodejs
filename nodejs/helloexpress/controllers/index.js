const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin/index.js'));

module.exports = router; 