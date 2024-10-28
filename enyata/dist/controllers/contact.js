"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactPage = void 0;
const getContactPage = (req, res) => {
    res.render('contact', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getContactPage = getContactPage;
