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

///////// RECORD /////////
// POST
    router.post("/records", function(req, res) {
        var query = "INSERT INTO ??(??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)";
        var table = ["Record", "product_id", "unit_id", "activity_id", "user_id", "attempt_run", "time_on_activity_duration", "score", req.body.product, req.body.unit, req.body.activity, req.body.user, req.body.attempt, req.body.duration, req.body.score];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(201).json({"Message" : "Record Added!"});
            }
        });
    });
// GET ALL RECORDS
    router.get("/records", function(req, res) {
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record) score_count, (SELECT SUM(score) FROM Record WHERE attempt_run = 1) first_attempt_score, "
        + "(SELECT AVG(score) FROM Record) average_attempt_score, (SELECT MAX(score) FROM Record) highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE attempt_run = (SELECT MAX(attempt_run) FROM Record)) last_attempt_score FROM ??";
        var table = ["Record"];
        query = mysql.format(query, table);
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
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record WHERE user_id = " + req.params.user_id + ") score_count, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + "))/100 first_attempt_score, "
        + "(SELECT AVG(score) FROM Record WHERE user_id = " + req.params.user_id + ")/100 average_attempt_score, "
        + "(SELECT MAX(score) FROM Record WHERE user_id = " + req.params.user_id + ")/100 highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + "))/100 last_attempt_score "
        + "FROM Record WHERE user_id = " + req.params.user_id;
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Record" : rows});
            }
        });
    });

// GET RECORDS BY USER_ID AND PRODUCT_ID
    router.get("/records/users/:user_id/products/:product_id", function(req, res) {
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + ") score_count, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + "))/100 first_attempt_score, "
        + "(SELECT AVG(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + ")/100 average_attempt_score, "
        + "(SELECT MAX(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + ")/100 highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + "))/100 last_attempt_score "
        + "FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id;
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Record" : rows});
            }
        });
    });

// GET RECORDS BY USER_ID, PRODUCT_ID AND UNIT_ID
    router.get("/records/users/:user_id/products/:product_id/units/:unit_id", function(req, res) {
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + ") score_count, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + "))/100 first_attempt_score, "
        + "(SELECT AVG(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + ")/100 average_attempt_score, "
        + "(SELECT MAX(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + ")/100 highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + "))/100 last_attempt_score "
        + "FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id;
        connection.query(query, function(err, rows) {
            if(err) {
                res.status(400).json({"Message" : "Error executing MySQL query"});
            } else {
                res.status(200).json({"Message" : "Success", "Record" : rows});
            }
        });
    });

// GET RECORDS BY USER_ID, PRODUCT_ID, UNIT_ID AND ACTIVITY_ID
    router.get("/records/users/:user_id/products/:product_id/units/:unit_id/activities/:activity_id", function(req, res) {
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id + ") score_count, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id + "))/100 first_attempt_score, "
        + "(SELECT AVG(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id + ")/100 average_attempt_score, "
        + "(SELECT MAX(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id + ")/100 highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id + "))/100 last_attempt_score "
        + "FROM Record WHERE user_id = " + req.params.user_id + " AND product_id = " + req.params.product_id + " AND unit_id = " + req.params.unit_id + " AND activity_id = " + req.params.activity_id;
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
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record WHERE activity_id = " + req.params.activity_id + ") score_count, "
        + "(SELECT SUM(score) FROM Record WHERE activity_id = " + req.params.activity_id + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE activity_id = " + req.params.activity_id + "))/100 first_attempt_score, "
        + "(SELECT AVG(score) FROM Record WHERE activity_id = " + req.params.activity_id + ")/100 average_attempt_score, "
        + "(SELECT MAX(score) FROM Record WHERE activity_id = " + req.params.activity_id + ")/100 highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE activity_id = " + req.params.activity_id + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE activity_id = " + req.params.activity_id + "))/100 last_attempt_score "
        + "FROM Record WHERE activity_id = " + req.params.activity_id;
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
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record WHERE product_id = " + req.params.product_id + ") score_count, "
        + "(SELECT SUM(score) FROM Record WHERE product_id = " + req.params.product_id + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE product_id = " + req.params.product_id + "))/100 first_attempt_score, "
        + "(SELECT AVG(score) FROM Record WHERE product_id = " + req.params.product_id + ")/100 average_attempt_score, "
        + "(SELECT MAX(score) FROM Record WHERE product_id = " + req.params.product_id + ")/100 highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE product_id = " + req.params.product_id + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE product_id = " + req.params.product_id + "))/100 last_attempt_score "
        + "FROM Record WHERE product_id = " + req.params.product_id;
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
        var query = "SELECT *, "
        + "(SELECT COUNT(score) FROM Record WHERE unit_id = " + req.params.unit_id + ") score_count, "
        + "(SELECT SUM(score) FROM Record WHERE unit_id = " + req.params.unit_id + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE unit_id = " + req.params.unit_id + "))/100 first_attempt_score, "
        + "(SELECT AVG(score) FROM Record WHERE unit_id = " + req.params.unit_id + ")/100 average_attempt_score, "
        + "(SELECT MAX(score) FROM Record WHERE unit_id = " + req.params.unit_id + ")/100 highest_attempt_score, "
        + "(SELECT SUM(score) FROM Record WHERE unit_id = " + req.params.unit_id + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE unit_id = " + req.params.unit_id + "))/100 last_attempt_score "
        + "FROM Record WHERE unit_id = " + req.params.unit_id;
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
