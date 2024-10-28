"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLoginController = exports.getLoginController = void 0;
const getLoginController = (req, res) => {
    res.render('login', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getLoginController = getLoginController;
const postLoginController = (req, res) => {
    console.log(req.body);
    return res.status(200).redirect('/');
};
exports.postLoginController = postLoginController;
