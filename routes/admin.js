const express = require('express');

const path = require('path');

const router = express.Router();

const productsController = require('../controllers/products.js');

// /admin/add-product=> GET request
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product=> POST request
router.post('/add-product', productsController.postAddProduct);

module.exports = router;