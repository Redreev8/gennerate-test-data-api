import { Request, Response } from 'express'
import {
    findDatas,
    findData,
    createData,
    changeData,
    removeData,
} from './data.model'

export const getAllData = async (
    req: Request,
    res: Response,
): Promise<undefined> => {
    try {
        const { name } = req.params
        const { paggint } = req.query
        const result = await findDatas(name, paggint ? +paggint : 0)
        res.json(result)
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что пошло не так', erors: e })
    }
}
export const getOneData = async (
    req: Request,
    res: Response,
): Promise<undefined> => {
    try {
        const { name, id } = req.params
        const result = await findData(name, id)
        res.json(result)
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что пошло не так', erors: e })
    }
}
export const postData = async (
    req: Request,
    res: Response,
): Promise<undefined> => {
    try {
        const { name } = req.params
        const { data } = req.body
        const result = await createData(name, data)
        res.json(result)
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что пошло не так', erors: e })
    }
}

export const putData = async (
    req: Request,
    res: Response,
): Promise<undefined> => {
    try {
        const { name, id } = req.params
        const { data } = req.body
        const result = await changeData(name, id, data)
        res.json(result)
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что пошло не так', erors: e })
    }
}

export const patchData = async (
    req: Request,
    res: Response,
): Promise<undefined> => {
    try {
        const { name, id } = req.params
        const { data } = req.body
        const result = await changeData(name, id, data)
        res.json(result)
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что пошло не так', erors: e })
    }
}
export const deleteData = async (
    req: Request,
    res: Response,
): Promise<undefined> => {
    try {
        const { name, id } = req.params
        const result = await removeData(name, id)
        res.json(result)
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Что пошло не так', erors: e })
    }
}
