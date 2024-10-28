import { Request, RequestHandler, Response } from "express"

export const getLoginController: RequestHandler = (req: Request, res: Response) => {
  res.render('login', {
    pageTitle: 'hbs template engine',
    metaDescription: 'our template',
    link: 'https://google.com',
  })
}

export const postLoginController: RequestHandler = (req: Request, res: Response) => {
  console.log(req.body)
  return res.status(200).redirect('/')
}
