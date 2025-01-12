import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params
    const { shema } = process.files[name]
    const { method } = req
    const isOneNameParams = req.url.split('/').filter((el) => el).length === 1
    if (typeof shema === 'object') {
        next()
        return
    }
    if (
        typeof shema !== 'object' &&
        isOneNameParams &&
        (method === 'GET' || method === 'PUT')
    ) {
        next()
        return
    }
    res.status(404).json({
        message: 'Name not action',
    })
    return
}
