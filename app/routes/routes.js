'use strict';
module.exports = function(app) {
    var lineGraph = require('../controller/controller.js');
    //Routes
    app.route('/linegraph/:graphId/:userId')
        .post(lineGraph.create_a_graph)
        .delete(lineGraph.delete_a_graph);
   
    app.route('/linegraph-data/:graphId/:userId')
        .post(lineGraph.create_a_point)
        .get(lineGraph.read_a_graph);
        
};
    