import generateDate from './genarate-data'
import array from './genarate-data/generate-func/array'
import integer from './genarate-data/generate-func/integer'
import lorem from './genarate-data/generate-func/lorem'
import uid from './genarate-data/generate-func/uid'
import word from './genarate-data/generate-func/word'

export default () => {
    generateDate({
        name: 'sfdadfsaf',
        shema: {
            id: () => uid(),
            title: () => word(10),
            text: () => lorem(5),
            watch: () => integer(10, 1),
            tags: () => array(5, [() => word(5)]),
            autor: {
                countArticle: () => integer(15, 5),
                name: () => word(10),
            },
        },
        count: 20,
        paggint: 4,
    })
    generateDate({
        name: 'uid',
        shema: () => uid(),
        count: 20,
        paggint: 4,
    })
}
