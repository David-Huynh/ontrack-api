'user strict';
var sql = require('./connect-to-db.js');

//Defining Linegraph-data object constructor
var Linegraph_data = function(linegraph_data){
    this.graph_id = linegraph_data.graph_id;
    this.user_id = linegraph_data.user_id;
    this.amount = linegraph_data.amount;
    this.date_entered = linegraph_data.date_entered;  
};
//Handles request to create a data point
Linegraph_data.createPoint = (graphId, userId, amount, dateEntered, result) => {
    sql.query("INSERT INTO linegraph_data SET ?", [graphId, userId, amount, dateEntered], (err, res) => {
        if (err){
            console.log("ERROR:", err);
        } else{
            console.log(res.insertID);
            result(null, res.insertID);
        }
    });
};
//Handles request to read data points
Linegraph_data.readSpecifiedPoints = (graphId, userId, result) => {
    sql.query("SELECT amount FROM linegraph_data WHERE graph_Id = ? AND userId = ?", [graphId, userId], (err, res) => {
        if (err){
            console.log("ERROR:", err);
            result(err, null);
        } else{
            result(null, res);
        }
    }); 
};
//Exports as module
module.exports = Linegraph_data;