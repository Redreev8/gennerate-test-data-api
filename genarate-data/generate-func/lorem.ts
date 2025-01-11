import integer from './integer'
import loremParagraf from './lorem-paragraf'

export default (paragrafNumber = 1, length = 15) => {
    length = typeof length === 'string' ? +length : length
    const [min, max] = typeof length === 'number' ? [length, length] : length
    let string = ''
    for (let i = 0; i < paragrafNumber; i++)
        string += loremParagraf(integer(max, min))
    return string
}
