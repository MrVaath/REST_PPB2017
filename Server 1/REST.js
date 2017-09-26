var mysql = require("mysql");
function REST_ROUTER(router, connection) {
    var self = this;
    self.handleRoutes(router, connection);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection) {

// GET
    router.get("/", function(req, res) {
        res.status(200).json({"Message" : "Hello World!"});
    });

///////// USER /////////
// POST
    router.post("/users", function(req, res) {
        var user = req.body.user;
        var query = "INSERT INTO User (user_id) VALUES (" + user + ")";

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
        var query = "SELECT * FROM User";

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
        var user = req.params.user_id;
        var query = "SELECT * FROM User WHERE user_id = " + user;

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
        var product = req.body.product;
        var query = "INSERT INTO Product (product_id) VALUES (" + product + ")";

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
        var query = "SELECT * FROM Product";

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
        var product = req.params.product_id;
        var query = "SELECT * FROM Product WHERE product_id = " + product;

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
        var unit = req.body.unit;
        var query = "INSERT INTO Unit (unit_id) VALUES (" + unit + ")";

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
        var query = "SELECT * FROM Unit";

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
        var unit = req.params.unit_id;
        var query = "SELECT * FROM Unit WHERE unit_id = " + unit;

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
        var activity = req.body.activity;
        var query = "INSERT INTO Activity (activity_id) VALUES (" + activity + ")";

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
        var query = "SELECT * FROM Activity";

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
        var activity = req.params.activity_id;
        var query = "SELECT * FROM Activity WHERE activity_id = " + activity;

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
        var user = req.body.user,
            product = req.body.product,
            unit = req.body.unit,
            activity = req.body.activity,
            duration = req.body.duration,
            score = req.body.score;
        var query = "INSERT INTO Record (product_id, unit_id, activity_id, user_id, attempt_run, time_on_activity_duration, score) VALUES (" + product + ", " + unit + ", " + activity + ", " + user + ", (SELECT COUNT(R.score) FROM Record R WHERE R.product_id = " + product + " AND R.unit_id = " + unit + " AND R.activity_id = " + activity + " AND R.user_id = " + user + "), " + duration + ", " + score + ")";

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
        var query1 = "SELECT *, ";
        var query2 = "(SELECT COUNT(score) FROM Record) score_count, ";
        var query3 = "(((SELECT SUM(score) FROM Record WHERE attempt_run = (SELECT MIN(attempt_run) FROM Record))/(SELECT COUNT(score) FROM Record WHERE attempt_run = (SELECT MIN(attempt_run) FROM Record)))/100) first_attempt_score, ";
        var query4 = "((SELECT AVG(score) FROM Record)/100) average_attempt_score, ";
        var query5 = "((SELECT MAX(score) FROM Record)/100) highest_attempt_score, ";
        var query6 = "(((SELECT SUM(score) FROM Record WHERE attempt_run = (SELECT MAX(attempt_run) FROM Record))/(SELECT COUNT(score) FROM Record WHERE attempt_run = (SELECT MAX(attempt_run) FROM Record)))/100) last_attempt_score "
        + "FROM Record";

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
        var user = req.params.user_id;
        var query1 = "SELECT *, ";
        var query2 = "(SELECT COUNT(score) FROM Record WHERE user_id = " + user + ") score_count, "
        var query3 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + ")))/100) first_attempt_score, "
        var query4 = "((SELECT AVG(score) FROM Record WHERE user_id = " + user + ")/100) average_attempt_score, "
        var query5 = "((SELECT MAX(score) FROM Record WHERE user_id = " + user + ")/100) highest_attempt_score, "
        var query6 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + ")))/100) last_attempt_score "
        + "FROM Record WHERE user_id = " + user;

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
        var user = req.params.user_id,
            product = req.params.product_id;
        var query1 = "SELECT *, "
        var query2 = "(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + ") score_count, "
        var query3 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + ")))/100) first_attempt_score, "
        var query4 = "((SELECT AVG(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + ")/100) average_attempt_score, "
        var query5 = "((SELECT MAX(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + ")/100) highest_attempt_score, "
        var query6 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + ")))/100) last_attempt_score "
        + "FROM Record WHERE user_id = " + user + " AND product_id = " + product;

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
        var user = req.params.user_id,
            product = req.params.product_id,
            unit = req.params.unit_id;
        var query1 = "SELECT *, "
        var query2 = "(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + ") score_count, "
        var query3 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + ")))/100) first_attempt_score, "
        var query4 = "((SELECT AVG(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + ")/100) average_attempt_score, "
        var query5 = "((SELECT MAX(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + ")/100) highest_attempt_score, "
        var query6 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + ")))/100) last_attempt_score "
        + "FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit;

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
        var user = req.params.user_id,
            product = req.params.product_id,
            unit = req.params.unit_id,
            activity = req.params.activity_id;
        var query1 = "SELECT *, "
        var query2 = "(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + ") score_count, "
        var query3 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + ")))/100) first_attempt_score, "
        var query4 = "((SELECT AVG(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + ")/100) average_attempt_score, "
        var query5 = "((SELECT MAX(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + ")/100) highest_attempt_score, "
        var query6 = "(((SELECT SUM(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + "))/(SELECT COUNT(score) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity + ")))/100) last_attempt_score "
        + "FROM Record WHERE user_id = " + user + " AND product_id = " + product + " AND unit_id = " + unit + " AND activity_id = " + activity;

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
        var activity = req.params.activity_id;
        var query1 = "SELECT *, "
        var query2 = "(SELECT COUNT(score) FROM Record WHERE activity_id = " + activity + ") score_count, "
        var query3 = "(((SELECT SUM(score) FROM Record WHERE activity_id = " + activity + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE activity_id = " + activity + "))/(SELECT COUNT(score) FROM Record WHERE activity_id = " + activity + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE activity_id = " + activity + ")))/100) first_attempt_score, "
        var query4 = "((SELECT AVG(score) FROM Record WHERE activity_id = " + activity + ")/100) average_attempt_score, "
        var query5 = "((SELECT MAX(score) FROM Record WHERE activity_id = " + activity + ")/100) highest_attempt_score, "
        var query6 = "(((SELECT SUM(score) FROM Record WHERE activity_id = " + activity + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE activity_id = " + activity + "))/(SELECT COUNT(score) FROM Record WHERE activity_id = " + activity + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE activity_id = " + activity + ")))/100) last_attempt_score "
        + "FROM Record WHERE activity_id = " + activity;

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
        var product = req.params.product_id;
        var query1 = "SELECT *, "
        var query2 = "(SELECT COUNT(score) FROM Record WHERE product_id = " + product + ") score_count, "
        var query3 = "(((SELECT SUM(score) FROM Record WHERE product_id = " + product + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE product_id = " + product + "))/(SELECT COUNT(score) FROM Record WHERE product_id = " + product + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE product_id = " + product + ")))/100) first_attempt_score, "
        var query4 = "((SELECT AVG(score) FROM Record WHERE product_id = " + product + ")/100) average_attempt_score, "
        var query5 = "((SELECT MAX(score) FROM Record WHERE product_id = " + product + ")/100) highest_attempt_score, "
        var query6 = "(((SELECT SUM(score) FROM Record WHERE product_id = " + product + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE product_id = " + product + "))/(SELECT COUNT(score) FROM Record WHERE product_id = " + product + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE product_id = " + product + ")))/100) last_attempt_score "
        + "FROM Record WHERE product_id = " + product;

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
        var unit = req.params.unit_id;
        var query1 = "SELECT *, "
        var query2 = "(SELECT COUNT(score) FROM Record WHERE unit_id = " + unit + ") score_count, "
        var query3 = "(((SELECT SUM(score) FROM Record WHERE unit_id = " + unit + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE unit_id = " + unit + "))/(SELECT COUNT(score) FROM Record WHERE unit_id = " + unit + " AND attempt_run = (SELECT MIN(attempt_run) FROM Record WHERE unit_id = " + unit + ")))/100) first_attempt_score, "
        var query4 = "((SELECT AVG(score) FROM Record WHERE unit_id = " + unit + ")/100) average_attempt_score, "
        var query5 = "((SELECT MAX(score) FROM Record WHERE unit_id = " + unit + ")/100) highest_attempt_score, "
        var query6 = "(((SELECT SUM(score) FROM Record WHERE unit_id = " + unit + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE unit_id = " + unit + "))/(SELECT COUNT(score) FROM Record WHERE unit_id = " + unit + " AND attempt_run = (SELECT MAX(attempt_run) FROM Record WHERE unit_id = " + unit + ")))/100) last_attempt_score "
        + "FROM Record WHERE unit_id = " + unit;

        query = query1 + query2 + query3 + query4 + query5 + query6;

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
