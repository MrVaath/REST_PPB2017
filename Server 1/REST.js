var mysql = require("mysql");
function REST_ROUTER(router, connection, md5) {
    var self = this;
    self.handleRoutes(router, connection, md5);
}

REST_ROUTER.prototype.handleRoutes= function(router, connection, md5) {

// OGÓLNY GET
    router.get("/", function(req, res) {
        res.status(200).json({"Message" : "Hello World!"});
    });

///////// USER /////////
// POST
    router.post("/users", function(req, res) {
        var query = "INSERT INTO ??(??) VALUES (?)";
        var table = ["User", "user_id", req.body.user];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Error" : false, "Message" : "User Added!"});
            }
        });
    });

// GET ALL USERS
    router.get("/users", function(req, res) {
        var query = "SELECT * FROM ??";
        var table = ["User"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

// GET USER BY ID
    router.get("/users/:user_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["User","user_id", req.params.user_id];
        query = mysql.format(query,table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "User" : rows});
            }
        });
    });

///////// PRODUCT /////////
// POST
    router.post("/products", function(req, res) {
        var query = "INSERT INTO ??(??) VALUES (?)";
        var table = ["Product", "product_id", req.body.product];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Error" : false, "Message" : "Product Added!"});
            }
        });
    });
// GET ALL PRODUCTS
    router.get("/products", function(req, res) {
        var query = "SELECT * FROM ??";
        var table = ["Product"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Products" : rows});
            }
        });
    });

// GET PRODUCT BY ID
    router.get("/products/:product_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Product","product_id", req.params.product_id];
        query = mysql.format(query,table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Product" : rows});
            }
        });
    });

///////// UNIT /////////
// POST
    router.post("/units", function(req, res) {
        var query = "INSERT INTO ??(??) VALUES (?)";
        var table = ["Unit", "unit_id", req.body.unit];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Error" : false, "Message" : "Unit Added!"});
            }
        });
    });
// GET ALL UNITS
    router.get("/units", function(req, res) {
        var query = "SELECT * FROM ??";
        var table = ["Unit"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Units" : rows});
            }
        });
    });

// GET UNIT BY ID
    router.get("/units/:unit_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Unit","unit_id", req.params.unit_id];
        query = mysql.format(query,table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Unit" : rows});
            }
        });
    });

///////// ACTIVITY /////////
// POST
    router.post("/activities", function(req, res) {
        var query = "INSERT INTO ??(??) VALUES (?)";
        var table = ["Activity", "activity_id", req.body.activity];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Error" : false, "Message" : "Activity Added!"});
            }
        });
    });
// GET ALL ACTIVITY
    router.get("/activities", function(req, res) {
        var query = "SELECT * FROM ??";
        var table = ["Activity"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Activities" : rows});
            }
        });
    });

// GET ACTIVITY BY ID
    router.get("/activities/:activity_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Activity","activity_id", req.params.activity_id];
        query = mysql.format(query,table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Activity" : rows});
            }
        });
    });

///////// RECORD /////////
// POST
    router.post("/records", function(req, res) {
        var query = "INSERT INTO ??(??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)";
        var table = ["Record", "product_id", "unit_id", "activity_id", "user_id", "attempt_run", "time_on_activity_duration", "score", req.body.product, req.body.unit, req.body.activity, req.body.user, req.body.attempt, req.body.duration, req.body.score];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Error" : false, "Message" : "Record Added!"});
            }
        });
    });
// GET ALL RECORDS
    router.get("/records", function(req, res) {
        var query = "SELECT * FROM ??";
        var table = ["Record"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Records" : rows});
            }
        });
    });

// GET RECORD BY ID
    router.get("/records/:record_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Record","record_id", req.params.record_id];
        query = mysql.format(query,table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Error" : false, "Message" : "Success", "Record" : rows});
            }
        });
    });
}

module.exports = REST_ROUTER;
