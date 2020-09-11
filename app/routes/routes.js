'use strict';
module.exports = function(app) {
    var todoList = require('../controller/controller');
    //Routes
    //app.route('/tasks')
    //.get(todoList.list_all_tasks)
    //.post(todoList.create_a_task);
   
   app.route('/lineGraph/:lineGraphID')
    .get(lineGraph.read_a_graph)
    .put(lineGraph.update_a_graph)

};
    