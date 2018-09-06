var express = require('express');
var router = express.Router();
var controller = require('./FormI-3.Controller');

router.post('/', (req, res) => {
    controller.addFormData(req.body).then((data) => {
        res.status(data.status).json(data.data);
    }).catch(err => {
        res.status(err.status).json(err.message);
    })
});

router.get('/sup/:_id', (req, res) => {
    controller.getFormDatabySupId(req.params._id).then((data) => {
        res.status(data.status).json(data.data);
    }).catch(err => {
        res.status(err.status).json(err.message);
    })
});

router.put('/:_id', (req, res) => {
    controller.attest(req.params._id, req.body).then((data) => {
        res.status(data.status).json(data.data);
    }).catch(err => {
        res.status(err.status).json(err.message);
    })
});

module.exports = router;


