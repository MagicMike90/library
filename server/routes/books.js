import express from 'express';
const router = express.Router();

import bookController from '../controllers/bookController';


router.get('/', bookController.book_list);
router.post('/', bookController.book_create);

router.get('/:id', bookController.book_detail);
router.put('/:id', bookController.book_update);
router.delete('/:id', bookController.book_delete);

module.exports = router;
