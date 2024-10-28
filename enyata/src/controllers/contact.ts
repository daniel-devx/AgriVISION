import { Request, RequestHandler, Response } from 'express'

export const getContactPage: RequestHandler = (req: Request, res: Response) => {
  res.render('contact', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}
