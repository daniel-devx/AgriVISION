"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransportProduct = exports.getTransport = exports.getBuyersProduct = exports.getBuyersBuy = exports.getSellersProduct = exports.getSellersPage = void 0;
const getSellersPage = (req, res) => {
    res.render('dashboard/sellers', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getSellersPage = getSellersPage;
const getSellersProduct = (req, res) => {
    res.render('dashboard/sellers/product', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getSellersProduct = getSellersProduct;
const getBuyersBuy = (req, res) => {
    res.render('dashboard/buyers', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getBuyersBuy = getBuyersBuy;
const getBuyersProduct = (req, res) => {
    res.render('dashboard/buyers/product', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getBuyersProduct = getBuyersProduct;
const getTransport = (req, res) => {
    res.render('dashboard/transport', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getTransport = getTransport;
const getTransportProduct = (req, res) => {
    res.render('dashboard/transport/products', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getTransportProduct = getTransportProduct;
