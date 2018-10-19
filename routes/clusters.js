var express = require('express');
var router = express.Router();
var controller = require('../api/clusters');

/* GET home page. */
router.get('/', controller.getClusters);
router.get('/:id', controller.getCluster);

module.exports = router;
