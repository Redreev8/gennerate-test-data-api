import fs from 'fs/promises'
import generateDateArray, { generateData, Shema } from './generate'
import path from 'path'
import dirname from '../dirname'

declare global {
    namespace NodeJS {
        interface Process {
            files: {
                [key: string]: Shema
            }
        }
    }
}
process.files = {}
const resetArgv = process.argv.find((el) => {
    return el.includes('r=') || el.includes('reset=')
})

const generate = async (shema: Shema) => {
    const pathFile = path.join(dirname, 'store', shema.name + '.json')
    let isCreate = false
    try {
        await fs.access(pathFile)
        isCreate = false
    } catch (_) {
        isCreate = true
    }

    process.files[shema.name] = shema
    const nameResetArgv = resetArgv ? resetArgv.split(shema.name)[0] : ''
    if (!isCreate && !(nameResetArgv === 'r=' || nameResetArgv === 'reset='))
        return
    console.log('m5tlvfcnwbscp7ro6u')
    const data =
        typeof shema.shema === 'object' && shema.count > 1
            ? generateDateArray(shema)
            : generateData(shema.shema)
    await fs.writeFile(pathFile, JSON.stringify(data, null, 4), {
        encoding: 'utf8',
        flag: 'w',
    })
}

export default generate
