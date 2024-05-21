const Product = require('../models/product');
const { validationResult } = require('express-validator');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        hasError: false,
        errorMessage: null,
        validationErrors: []
    });
};

exports.postAddProduct = (req,res,next)=>{
    const title = req.body.title;
    const imageUrl = req.file;
    const price = req.body.price;
    const description = req.body.description;
    console.log(imageUrl);
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).render('admin/add-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            editing: false,
            hasError: true,
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array(),
            product: {
                title: title,
                price: price,
                description: description,
                imageUrl: imageUrl
            }
        });
    }
    const product = new Product({title: title, price: price, description: description, imageUrl: imageUrl, userId: req.user});
    product.save()
    .then(result => {
        console.log('Created Product');
        res.redirect('/admin/products');
    })
    .catch(err => {
<<<<<<< HEAD
        // return res.status(500).render('admin/add-product', {
=======
        // res.status(500).render('admin/edit-product', {
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
        //     pageTitle: 'Add Product',
        //     path: '/admin/add-product',
        //     editing: false,
        //     hasError: true,
<<<<<<< HEAD
        //     errorMessage: 'DB opertaion failed !!',
=======
        //     errorMessage: 'Database operation failed, Please try again !!',
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
        //     validationErrors: [],
        //     product: {
        //         title: title,
        //         price: price,
        //         description: description,
        //         imageUrl: imageUrl
        //     }
        // });
        // res.redirect('/500');
        const error = new Error(err);
<<<<<<< HEAD
        error.httpStatusCode= 500;
=======
        error.httpStatusCode = 500;
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
        return next(error);
    });
};
 
exports.getEditProduct = (req,res,next) => {
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId)
    .then(product => {
        if(!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            hasError: false,
            product: product,
            errorMessage: null,
            validationErrors: []
        });
    }).catch(err => {
        const error = new Error(err);
<<<<<<< HEAD
        error.httpStatusCode= 500;
=======
        error.httpStatusCode = 500;
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
        return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: false,
            hasError: true,
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array(),
            product: {
                title: updatedTitle,
                price: updatedPrice,
                description: updatedDesc,
                imageUrl: updatedImageUrl,
                _id: prodId
            }
        });
    }
    Product.findById(prodId).then(product => {
        // throw new Error(err);
        if(product.userId.toString() !==req.user._id.toString()) {
            return res.redirect('/');
        }
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.description = updatedDesc;
        product.imageUrl = updatedImageUrl;
        return product.save().then(result => {
            console.log('Updated Product');
            res.redirect('/admin/products');
        })
    })
    .catch(err => {
        const error = new Error(err);
<<<<<<< HEAD
        error.httpStatusCode= 500;
=======
        error.httpStatusCode = 500;
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
        return next(error);
    });
}

exports.getProducts = (req, res, next) => {
    Product.find({userId: req.user._id})
    .then(products => {
        res.render('admin/products',{
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        })
    }).catch(err => {
        const error = new Error(err);
<<<<<<< HEAD
        error.httpStatusCode= 500;
=======
        error.httpStatusCode = 500;
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
        return next(error);
    });
};

exports.postDeleteProduct = (req,res,next) => {
    const prodId = req.body.productId;
    Product.deleteOne({_id: prodId , userId: req.user._id})
    .then(() => {
        console.log('Destroyed Product');
        res.redirect('/admin/products');        
    })
    .catch(err => {
        const error = new Error(err);
<<<<<<< HEAD
        error.httpStatusCode= 500;
=======
        error.httpStatusCode = 500;
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
        return next(error);
    });
}

