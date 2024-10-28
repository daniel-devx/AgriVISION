"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomeController = void 0;
const getHomeController = (request, response) => {
    response.render('index', {
        pageTitle: 'hbs template engine',
        metaDescription: 'our template',
        link: 'https://google.com',
    });
};
exports.getHomeController = getHomeController;
