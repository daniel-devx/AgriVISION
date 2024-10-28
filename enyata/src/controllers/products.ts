import { Request, RequestHandler, Response } from 'express'

export const getProductsPage: RequestHandler = (
  req: Request,
  res: Response
) => {
  res.render('products')
}
