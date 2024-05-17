const express = require('express');

const path = require('path');

const router = express.Router();

const adminController = require('../controllers/admin.js');
const isAuth = require('../middleware/is-auth.js');

// /admin/add-product=> GET request
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products=> GET request
router.get('/products', isAuth, adminController.getProducts);

// // /admin/add-product=> POST request
router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;