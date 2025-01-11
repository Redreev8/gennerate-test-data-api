export default (length: number = 5) => {
    let result = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let counter = 0
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length),
        )
        counter += 1
    }
    return result
}
