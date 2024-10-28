import { Request, RequestHandler, Response } from "express"

export const getHomeController: RequestHandler = (request: Request, response: Response) => {
  response.render('index', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}
