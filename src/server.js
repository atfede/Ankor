var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client

// Connection string parameters.
dbConfig = {    
    driver: sql,
    connectionString:'Driver={SQL Server Native Client 11.0};Server={MSI\\SQLEXPRESS};Database={Ankor};Trusted_Connection={yes};'
};

// Start server and listen on http://localhost:1433/
var server = app.listen(1433, function () {
    var host = server.address().address
    var port = server.address().port

});

var getExtratos = function(ext)
{
    sql.connect(dbConfig, function(error)
    {
        if(error)
        {
            console.log("Error while connecting database :- " + error);
            ext.send(error);
            sql.close();
        }
        else
        {
            var request = new sql.Request();
            request.query('select * from Ankor.Cliente', function(error, dataset)
            {
                if(error) console.log(error);
                ext.end(JSON.stringify(dataset));
            });
        }
    });
}