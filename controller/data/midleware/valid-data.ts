import { Request, Response, NextFunction } from 'express'
import { generateData } from '../../../genarate-data/generate'

export const checkData = (validData: any, data: any) => {
    console.log(typeof validData)
    console.log(typeof data)
    if (typeof validData !== typeof data) return ['No valid data']
    if (typeof validData !== 'object') return []
    const keys = []
    for (const key in data) {
        const el = data[key]
        if (typeof validData[key] !== 'object') {
            if (typeof validData[key] !== typeof el) {
                keys.push(`'No valid ${key}`)
                continue
            }
            continue
        }
        if (Array.isArray(validData[key])) {
            if (!Array.isArray(el)) keys.push(`'No valid ${key}`)
            continue
        }
        const res = checkData(validData[key], el)
        if (res.length > 0) keys.push(res)
    }

    return keys
}

export default async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params
    const { data } = req.body
    const { shema } = process.files[name]
    const errors = checkData(generateData(shema), data)
    console.log(errors)
    if (errors.length === 0) {
        next()
        return
    }
    res.status(404).json({
        message: 'No valid',
        errors,
    })
    return
}
