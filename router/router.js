var express = require('express');
var router = express.Router();

var routes = {
	initialize: function() {
		this.get.getRoot();
	},
	get: {
		getRoot: function() {
			router.get('/', function(req, res) {
				res.render('index', { title: 'Home', auth: {"verified": false}});
			});
		}
	}
}

routes.initialize();
module.exports = router;