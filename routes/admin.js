const express = require('express');

const path = require('path');

const router = express.Router();

const productsController = require('../controllers/admin.js');

// /admin/add-product=> GET request
router.get('/add-product', productsController.getAddProduct);

// /admin/products=> GET request
router.get('/products', productsController.getProducts);

// /admin/add-product=> POST request
router.post('/add-product', productsController.postAddProduct);

module.exports = router;