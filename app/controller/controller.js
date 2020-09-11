'use strict';

var LineGraph = require('../model/linegraph-model.js');
var LineGraph_Data = require('../model/linegraph-data-model.js');

exports.read_a_graph = () => {  
    LineGraph_Data.readSpecifiedPoints(req.params.graphId, req.params.userId, (err, task) => {
        if (err){
            res.send(err);
        }
        res.json(task);
    });
};
exports.create_a_point = (req, res) => {
    var new_point = new LineGraph_Data(req.body);
    //Handles null error
    if (!new_point.graph_id || !new_point.user_id || !new_point.amount || !new_point.date_entered){
        res.status(400).send({ error:true, message: 'No graphid/userid/amount/date_entered' });
    } else {
        LineGraph.createLineGraph(new_graph, (err, point) => {
            if (err){
                res.send(err);
            }
            res.json(point);
        });
    }
};

exports.create_a_graph  = (req, res) => {
    var new_graph = new LineGraph(req.body);
    //Handles null error
    if (!new_graph.user_id){
        res.status(400).send({ error:true, message: 'No user id' });
    } else {
        LineGraph.createLineGraph(new_graph, (err, graph) => {
            if (err){
                res.send(err);
            }
            res.json(graph);
        });
    }
};
exports.delete_a_graph = (req, res) => {
    LineGraph.remove(req.params.graphId, req.params.userId, (err, task) => {
        if (err){
            res.send(err);
        }
        res.json({ message: 'Task successfully deleted' });
    });
};
