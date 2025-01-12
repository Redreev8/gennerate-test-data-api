import { Router } from 'express'
import {
    getAllData,
    getOneData,
    postData,
    putData,
    patchData,
    deleteData,
} from './data.controller'
import checkNameStore from './midleware/check-name-store'
import validData from './midleware/valid-data'
import checkAction from './midleware/check-action'

const router = Router()

router.get('/:name/', [checkNameStore, checkAction], getAllData)
router.get('/:name/:id', [checkNameStore, checkAction], getOneData)
router.post('/:name/', [checkNameStore, checkAction, validData], postData)
router.put('/:name/(:id)?', [checkNameStore, checkAction, validData], putData)
router.patch('/:name/:id', [checkNameStore, checkAction, validData], patchData)
router.delete('/:name/:id', [checkNameStore, checkAction], deleteData)

export default router
