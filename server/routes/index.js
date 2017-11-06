import express from 'express';
import path from 'path';

const router = express.Router();


router.get('/', function (req, res) {
    console.log('index route Called');
    res.sendFile(path.resolve('index.html'));
})

module.exports = router;
