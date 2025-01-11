import integer from './integer'

export default (
    length: number | [number, number] = 0,
    func: (() => any)[] = [],
) => {
    return Array.from(
        { length: typeof length === 'number' ? length : integer(...length) },
        () => {
            return func[integer(func.length - 1, 0)]()
        },
    )
}
