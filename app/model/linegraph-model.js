'user strict';
var sql = require('./db.js');
/*
    Defining model for how linegraph
*/
var Linegraphs = function(linegraph){
    this.user_id = linegraph.user_id;    
};

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




module.exports = Linegraphs;