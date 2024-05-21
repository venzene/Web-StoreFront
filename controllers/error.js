exports.get404 = (req, res, next) => {
<<<<<<< HEAD
  res.status(404).render('404',{
=======
  res.status(404).render('404', {
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
    path:'/404',
    pageTitle: 'Page Not Found',
    isAuthenticated: req.session.isLoggedIn
  });
<<<<<<< HEAD
};

exports.get500 = (req, res, next) => {
  res.status(500).render('500',{
    path:'/500',
    pageTitle: 'Error',
=======
  };

exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
    path:'/500',
    pageTitle: 'Some Error Occured.',
>>>>>>> ce2bb9d41ec336aa2beb297d9c040a0c4a805a1d
    isAuthenticated: req.session.isLoggedIn
  });
};