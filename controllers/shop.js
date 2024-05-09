const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{
            prods: products,
            pageTitle: 'All Products',
            path: '/',
            hasProducts: products.length >0,
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product :product,
            pageTitle: product.title,
            path: '/products'
        });
    })
    
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index',{
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length >0,
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
};

exports.postCart =(req, res, next) => {
    const prodId =req.body.productId;
    Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
    })
    res.redirect('/cart');
};

exports.getCheckout = (res, req, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
};

exports.getorders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    })
};