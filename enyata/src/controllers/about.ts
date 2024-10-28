import { Request, RequestHandler, Response } from 'express'

export const getAboutPage: RequestHandler = (req: Request, res: Response) => {
  res.render('about')
}
