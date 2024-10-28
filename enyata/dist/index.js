"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const hbs_1 = __importDefault(require("hbs"));
const controllers_1 = require("./controllers");
app.set('view engine', 'hbs');
// Set the directory for the views
app.set('views', path_1.default.join(__dirname, 'views'));
hbs_1.default.registerPartials(path_1.default.join(__dirname, 'views/partials'));
// Serve static files from the 'public' directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Route for the home page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
// });
// // Route for other HTML pages
// app.get('/:page', (req, res) => {
//   const page = req.params.page;
//   res.sendFile(path.join(__dirname, 'public', 'pages', `${page}.html`));
// });
app.get('/', controllers_1.getHomeController);
app.get('/about', controllers_1.getAboutPage);
app.get('/products', controllers_1.getProductsPage);
app.get('/market', controllers_1.getMarketPage);
app.get('/contact', controllers_1.getContactPage);
// Dashboard
app.get('/dashboard/sellers', controllers_1.getSellersPage);
app.get('/dashboard/sellers/product', controllers_1.getSellersProduct);
app.get('/dashboard/buyers/buy', controllers_1.getBuyersBuy);
app.get('/dashboard/buyers/product', controllers_1.getBuyersProduct);
app.get('/dashboard/transport', controllers_1.getTransport);
app.get('/dashboard/transport/products', controllers_1.getTransportProduct);
// Login
app.route('/login').get(controllers_1.getLoginController).post(controllers_1.postLoginController);
app.listen(3001, () => {
    console.log('Server started');
});
