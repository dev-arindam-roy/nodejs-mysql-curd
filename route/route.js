const router = require('express').Router();

const curdController = require('../controller/curdController');

router.get('/', curdController.list);
router.get('/add', curdController.add);
router.post('/save', curdController.save);
router.get('/edit/:id', curdController.edit);
router.post('/update/:id', curdController.update);
router.get('/delete/:id', curdController.delete);
router.get('/delete-user-image/:id', curdController.deleteUserImage);

module.exports = router;