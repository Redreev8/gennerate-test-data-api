import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params
    if (!process.files[name]) {
        res.status(404).json({
            message: 'Name no found',
        })
        return
    }
    next()
    return
}
