import fs from 'fs/promises'
import path from 'path'
import dirname from '../../dirname'

const getDirFile = (name: string) => path.join(dirname, 'store', name + '.json')

export const findDatas = async (
    name: string,
    numberPaggint: number = 0,
): Promise<any> => {
    let data: string | any[] = await fs.readFile(getDirFile(name), {
        encoding: 'utf8',
    })
    data = JSON.parse(data) as any[]
    if (!process.files[name].paggint) return data
    const { paggint } = process.files[name]
    return {
        count: data.length,
        numberPaggint,
        paggint,
        data: data.filter((el, i) => {
            if (
                !(
                    i >= paggint * numberPaggint &&
                    i < paggint * numberPaggint + paggint
                )
            )
                return
            return el
        }),
    }
}

export const findData = async (name: string, id: string): Promise<any> => {
    const data = await fs.readFile(getDirFile(name), { encoding: 'utf8' })
    return JSON.parse(data).filter(
        (el) => el[process.files[name].key] === id,
    )[0]
}

export const createData = async (name: string, d: any): Promise<any> => {
    let data: string | any[] = await fs.readFile(getDirFile(name), {
        encoding: 'utf8',
    })
    data = JSON.parse(data) as any[]
    data.push(d)
    await fs.writeFile(getDirFile(name), JSON.stringify(data, null, 4), {
        encoding: 'utf8',
        flag: 'w',
    })
    return d
}

export const changeData = async (
    name: string,
    id: string,
    d: any,
): Promise<any> => {
    let data = await fs.readFile(getDirFile(name), { encoding: 'utf8' })
    if (id) {
        data = JSON.parse(data).map((el) => {
            if (el[process.files[name].key] === id) {
                return {
                    ...el,
                    ...d,
                }
            }
            return el
        })
    } else {
        data = d
    }
    await fs.writeFile(getDirFile(name), JSON.stringify(data, null, 4), {
        encoding: 'utf8',
        flag: 'w',
    })
    return d
}

export const removeData = async (name: string, id: string): Promise<any> => {
    let data = await fs.readFile(getDirFile(name), { encoding: 'utf8' })
    data = JSON.parse(data).filter((el) => el[process.files[name].key] !== id)
    await fs.writeFile(getDirFile(name), JSON.stringify(data, null, 4), {
        encoding: 'utf8',
        flag: 'w',
    })
    return id
}
