var mysql = require("mysql");
function REST_ROUTER(router, connection) {
    var self = this;
    self.handleRoutes(router, connection);
}

REST_ROUTER.prototype.handleRoutes= function(router, connection) {

// GET
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Message" : "User Added!"});
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Users" : rows});
            }
        });
    });

// GET USER BY ID
    router.get("/users/:user_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["User", "user_id", req.params.user_id];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "User" : rows});
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Message" : "Product Added!"});
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Products" : rows});
            }
        });
    });

// GET PRODUCT BY ID
    router.get("/products/:product_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Product", "product_id", req.params.product_id];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Product" : rows});
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Message" : "Unit Added!"});
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Units" : rows});
            }
        });
    });

// GET UNIT BY ID
    router.get("/units/:unit_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Unit", "unit_id", req.params.unit_id];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Unit" : rows});
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Message" : "Activity Added!"});
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
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Activities" : rows});
            }
        });
    });

// GET ACTIVITY BY ID
    router.get("/activities/:activity_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Activity", "activity_id", req.params.activity_id];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Activity" : rows});
            }
        });
    });

/////// RECORD /////////
// POST RECORD
    router.post("/records", function(req, res) {
        var user =      req.body.user,
            product =   req.body.product,
            unit =      req.body.unit,
            activity =  req.body.activity,
            attempt =   req.body.attempt,
            duration =  req.body.duration,
            score =     req.body.score;

        //INSERT INTO Record
        var query1 = "INSERT INTO Record (product_id, unit_id, activity_id, user_id, attempt_run, time_on_activity_duration, score) VALUES(" + product + ", " + unit + ", " + activity + ", "  + user + ", " + attempt + ", " + duration + ", " + score + ");\n";

        //INSERT INTO Aggregate
        var query2 = "INSERT INTO Aggregate (user_id, product_id, unit_id, activity_id, time_on_activity_duration, score_count, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", " + product + ", " + unit + ", " + activity + ", " + duration + ", " + score + ", " + score + ", " + score + ", " + score + ", " + score + ") ON DUPLICATE KEY UPDATE time_on_activity_duration = time_on_activity_duration + VALUES(time_on_activity_duration), score_count =  VALUES(score_count) + score_count, first_attempt_score = first_attempt_score, average_attempt_score = (score_count / " + attempt + "), highest_attempt_score = IF(highest_attempt_score < VALUES(highest_attempt_score), VALUES(highest_attempt_score), highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n";
            
        query = query1 + query2;
        console.log(query);
        
        connection.query(query, function(err, rows) {
            if(err) {
                console.log(err);
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Message" : "Record Added!"});
            }
        });
    });
// GET ALL RECORDS
    router.get("/records", function(req, res) {
        var query = "SELECT * FROM Aggregate";
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Records" : rows});
            }
        });
    });

// AGGREGATE
// GET RECORDS BY USER_ID
    router.get("/records/users/:user_id", function(req, res) {
        var query = "SELECT * FROM Aggregate WHERE user_id = " + req.params.user_id;
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Record" : rows});
            }
        });
    });

// GET RECORDS BY ACTIVITY_ID
    router.get("/records/activities/:activity_id", function(req, res) {
        var query = "SELECT * FROM Aggregate WHERE activity_id = " + req.params.activity_id;
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Record" : rows});
            }
        });
    });

// GET RECORDS BY PRODUCT_ID
    router.get("/records/products/:product_id", function(req, res) {
        var query = "SELECT * FROM Aggregate WHERE product_id = " + req.params.product_id;
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Record" : rows});
            }
        });
    });

// GET RECORDS BY UNIT_ID
    router.get("/records/units/:unit_id", function(req, res) {
        var query = "SELECT * FROM Aggregate WHERE unit_id = " + req.params.unit_id;
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Record" : rows});
            }
        });
    });
}

module.exports = REST_ROUTER;
