'user strict';
var sql = require('./connect-to-db.js');

//Linegraphs object constructor
var Linegraphs = function(linegraph){
    this.user_id = linegraph.user_id;    
};
//Handles requests to create linegraph
Linegraphs.createLineGraph = (graphId, userId, result) =>  {
    sql.query("INSERT INTO linegraphs set ?", [graphId, userId], (err, res) => {
        if (err){
            console.log("ERROR:", err);
        } else{
            console.log(res.insertID);
            result(null, res.insertID);
        }
    });
};
//Handles requests to remove line graph
Linegraphs.remove = (graphId, userId, result) =>  {
    sql.query("DELETE FROM linegraphs WHERE graph_id = ? AND user_id = ?", [graphId, userId], (err, res) => {
        if (err){
            console.log("ERROR:", err);
            result(null, err);
        } else{
            result(null, res);
        }
    });
};
//Exports as module
module.exports = Linegraphs;