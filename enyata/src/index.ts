import express, { Request, RequestHandler, Response } from 'express'
const app = express()

import path from 'path'
import hbs from 'hbs'
import {
  getAboutPage,
  getBuyersBuy,
  getBuyersProduct,
  getHomeController,
  getLoginController,
  getMarketPage,
  getProductsPage,
  getSellersProduct,
  getSellersPage,
  getTransport,
  getTransportProduct,
  postLoginController,
  getContactPage,
} from './controllers'

app.set('view engine', 'hbs')

// Set the directory for the views
app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, 'views/partials'))

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')))

// Route for the home page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
// });

// // Route for other HTML pages
// app.get('/:page', (req, res) => {
//   const page = req.params.page;
//   res.sendFile(path.join(__dirname, 'public', 'pages', `${page}.html`));
// });

app.get('/', getHomeController)
app.get('/about', getAboutPage)
app.get('/products', getProductsPage)
app.get('/market', getMarketPage)
app.get('/contact', getContactPage)
// Dashboard
app.get('/dashboard/sellers', getSellersPage)
app.get('/dashboard/sellers/product', getSellersProduct)

app.get('/dashboard/buyers/buy', getBuyersBuy)
app.get('/dashboard/buyers/product', getBuyersProduct)

app.get('/dashboard/transport', getTransport)
app.get('/dashboard/transport/products', getTransportProduct)

// Login
app.route('/login').get(getLoginController).post(postLoginController)

app.listen(3001, () => {
  console.log('Server started')
})
