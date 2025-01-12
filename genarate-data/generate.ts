export interface Shema {
    name: string
    shema:
        | {
              [key: string]:
                  | ((obj: any, shema?: Shema['shema']) => any)
                  | Shema['shema']
                  | string
                  | number
                  | boolean
                  | any[]
          }
        | ((obj: any, shema: Shema['shema']) => any)
        | string
        | number
        | boolean
        | any[]
    key?: string
    count?: number
    paggint?: number
}

export const generateData = (shema: Shema['shema']) => {
    if (typeof shema === 'function') return shema(shema, shema)
    if (typeof shema !== 'object') return shema
    const obj = {}
    for (const key in shema) {
        if (typeof shema[key] === 'function') {
            obj[key] = shema[key](obj, shema)
            continue
        }
        if (typeof shema[key] === 'object' && !Array.isArray(obj)) {
            obj[key] = generateData(shema[key] as Shema['shema'])
            continue
        }
        obj[key] = shema[key]
    }
    return obj
}

const generateDateArray = (date: Shema) => {
    const { shema, count } = date
    const result: any[] = []
    for (let i = 0; i < count; i++) {
        result.push(generateData(shema))
    }
    return result
}

export default generateDateArray
