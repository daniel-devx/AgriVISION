import { Request, RequestHandler, Response } from 'express'

export const getMarketPage: RequestHandler = (req: Request, res: Response) => {
  res.render('market')
}
