const express = require('express')
const router = express.Router()
const IndexControllers = require('../controllers/index')

router.get('/ajouter', IndexControllers.getIndex)
router.post('/ajouterArgos', IndexControllers.postIndex)
router.post('/delete/:id', IndexControllers.DeleteIndex)
router.put('/update/:id', IndexControllers.updateIndex)



module.exports = router