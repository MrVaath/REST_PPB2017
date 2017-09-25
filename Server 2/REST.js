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
        var query1 = "INSERT INTO Record (product_id, unit_id, activity_id, user_id, attempt_run, time_on_activity_duration, score) VALUES(" + product + ", " + unit + ", " + activity + ", "  + user + ", " + attempt + ", " + duration + ", " + score + ");\n\n";

        //INSERT INTO Aggregate - user_id, product_id, unit_id, activity_id
        var query2 = "INSERT INTO Aggregate (user_id, product_id, unit_id, activity_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", " + product + ", " + unit + ", " + activity + ", " + duration + ", " + 1 + ", " + score + ", " + score + ", " + score + ", " + score + ", " + score + ") ON DUPLICATE KEY UPDATE time_on_activity_duration = time_on_activity_duration + VALUES(time_on_activity_duration), score_count =  score_count + 1, score_sum = score_sum + VALUES(score_sum), first_attempt_score = first_attempt_score, average_attempt_score = (score_sum / score_count), highest_attempt_score = IF(highest_attempt_score < VALUES(highest_attempt_score), VALUES(highest_attempt_score), highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";

        //INSERT INTO Aggregate - user_id, product_id, unit_id, -1
        var query3 = "INSERT INTO Aggregate (user_id, product_id, unit_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", " + product + ", " + unit + ", (SELECT SUM(A.time_on_activity_duration) FROM Aggregate A WHERE A.user_id =" + user + " AND A.product_id = " + product + " AND A.unit_id = " + unit + " AND A.activity_id > 0), (SELECT SUM(B.score_count) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id = " + unit + " AND B.activity_id  > 0), (SELECT SUM(B.score_sum) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id = " + unit + " AND B.activity_id  > 0), " + score + ",  (SELECT AVG(C.average_attempt_score) FROM Aggregate C WHERE C.user_id =" + user + " AND C.product_id = " + product + " AND C.unit_id = " + unit + " AND C.activity_id  > 0), (SELECT MAX(D.highest_attempt_score) FROM Aggregate D WHERE D.user_id =" + user + " AND D.product_id = " + product + " AND D.unit_id = " + unit + " AND D.activity_id  > 0), " + score + ")\n ON DUPLICATE KEY UPDATE time_on_activity_duration = VALUES(time_on_activity_duration), score_sum = VALUES(score_sum), score_count =  VALUES(score_count), first_attempt_score = first_attempt_score, average_attempt_score = VALUES(average_attempt_score), highest_attempt_score = VALUES(highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";

        //INSERT INTO Aggregate - user_id, product_id, -1, -1
        var query4 = "INSERT INTO Aggregate (user_id, product_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", " + product + ", (SELECT SUM(A.time_on_activity_duration) FROM Aggregate A WHERE A.user_id =" + user + " AND A.product_id = " + product + " AND A.unit_id > 0 AND A.activity_id < 0), (SELECT SUM(B.score_count) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id > 0 AND B.activity_id  < 0), (SELECT SUM(B.score_sum) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id > 0 AND B.activity_id  < 0), " + score + ",  (SELECT AVG(C.average_attempt_score) FROM Aggregate C WHERE C.user_id =" + user + " AND C.product_id = " + product + " AND C.unit_id > 0 AND C.activity_id  < 0), (SELECT MAX(D.highest_attempt_score) FROM Aggregate D WHERE D.user_id =" + user + " AND D.product_id = " + product + " AND D.unit_id > 0 AND D.activity_id  < 0), " + score + ")\n ON DUPLICATE KEY UPDATE time_on_activity_duration = VALUES(time_on_activity_duration), score_sum = VALUES(score_sum), score_count =  VALUES(score_count), first_attempt_score = first_attempt_score, average_attempt_score = VALUES(average_attempt_score), highest_attempt_score = VALUES(highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";

        //INSERT INTO Aggregate - user_id, -1, -1, -1
        var query5 = "INSERT INTO Aggregate (user_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", (SELECT SUM(A.time_on_activity_duration) FROM Aggregate A WHERE A.user_id =" + user + " AND A.product_id > 0 AND A.unit_id < 0 AND A.activity_id < 0), (SELECT SUM(B.score_count) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id > 0 AND B.unit_id < 0 AND B.activity_id  < 0), (SELECT SUM(B.score_sum) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id > 0 AND B.unit_id < 0 AND B.activity_id  < 0), " + score + ",  (SELECT AVG(C.average_attempt_score) FROM Aggregate C WHERE C.user_id =" + user + " AND C.product_id > 0 AND C.unit_id < 0 AND C.activity_id  < 0), (SELECT MAX(D.highest_attempt_score) FROM Aggregate D WHERE D.user_id =" + user + " AND D.product_id > 0 AND D.unit_id < 0 AND D.activity_id  < 0), " + score + ")\n ON DUPLICATE KEY UPDATE time_on_activity_duration = VALUES(time_on_activity_duration), score_sum = VALUES(score_sum), score_count =  VALUES(score_count), first_attempt_score = first_attempt_score, average_attempt_score = VALUES(average_attempt_score), highest_attempt_score = VALUES(highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";

        query = query1 + query2 + query3 + query4 + query5;

        connection.query(query, function(err, rows) {
            if(err) {
                console.log('\n\n\t\t-------- ERROR --------\n\n' + query + '\n\n' + err)
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
                console.log('\n\n\t\t-------- ERROR --------\n\n' + query + '\n\n' + err)
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
