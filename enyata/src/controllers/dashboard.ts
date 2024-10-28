import { Request, RequestHandler, Response } from 'express'

export const getSellersPage: RequestHandler = (req: Request, res: Response) => {
  res.render('dashboard/sellers', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}

export const getSellersProduct: RequestHandler = (
  req: Request,
  res: Response
) => {
  res.render('dashboard/sellers/product', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}

export const getBuyersBuy: RequestHandler = (req: Request, res: Response) => {
  res.render('dashboard/buyers', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}

export const getBuyersProduct: RequestHandler = (
  req: Request,
  res: Response
) => {
  res.render('dashboard/buyers/product', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}

export const getTransport: RequestHandler = (req: Request, res: Response) => {
  res.render('dashboard/transport', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}

export const getTransportProduct: RequestHandler = (
  req: Request,
  res: Response
) => {
  res.render('dashboard/transport/products', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}
