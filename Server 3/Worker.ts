export class Worker {
    private static connection;
    private static maxEvents;
    private static maxTime;
    private static eventCount: number = 0;
    private static intervalPointer;

    public static setup(connection, maxEvents, maxTime) {
        Worker.connection = connection;
        Worker.maxEvents = maxEvents;
        Worker.maxTime = maxTime;
        Worker.intervalPointer = setInterval(Worker.generateSnapshot, maxTime);
    }

    public static turnOff() {

    }

    public static registerEvent() {
        Worker.eventCount++;
        if (Worker.eventCount > Worker.maxEvents) {
            Worker.generateSnapshot();
        }
    }
    public static generateSnapshot() {
            var tquery2 = "SELECT * FROM Events WHERE event_id > Snapshots.snapshot_id GROUP BY user_id, product_id, unit_id, activity_id";

            //INSERT INTO Aggregate - user_id, product_id, unit_id, activity_id
            var query2 = "INSERT INTO Aggregate (user_id, product_id, unit_id, activity_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", " + product + ", " + unit + ", " + activity + ", " + duration + ", " + 1 + ", " + score + ", " + score + ", " + score + ", " + score + ", " + score + ") ON DUPLICATE KEY UPDATE time_on_activity_duration = time_on_activity_duration + VALUES(time_on_activity_duration), score_count =  score_count + 1, score_sum = score_sum + VALUES(score_sum), first_attempt_score = first_attempt_score, average_attempt_score = (score_sum / score_count), highest_attempt_score = IF(highest_attempt_score < VALUES(highest_attempt_score), VALUES(highest_attempt_score), highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";
    
            //INSERT INTO Aggregate - user_id, product_id, unit_id, -1
            var query3 = "INSERT INTO Aggregate (user_id, product_id, unit_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", " + product + ", " + unit + ", (SELECT SUM(A.time_on_activity_duration) FROM Aggregate A WHERE A.user_id =" + user + " AND A.product_id = " + product + " AND A.unit_id = " + unit + " AND A.activity_id > 0), (SELECT SUM(B.score_count) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id = " + unit + " AND B.activity_id  > 0), (SELECT SUM(B.score_sum) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id = " + unit + " AND B.activity_id  > 0), " + score + ",  (SELECT AVG(C.average_attempt_score) FROM Aggregate C WHERE C.user_id =" + user + " AND C.product_id = " + product + " AND C.unit_id = " + unit + " AND C.activity_id  > 0), (SELECT MAX(D.highest_attempt_score) FROM Aggregate D WHERE D.user_id =" + user + " AND D.product_id = " + product + " AND D.unit_id = " + unit + " AND D.activity_id  > 0), " + score + ")\n ON DUPLICATE KEY UPDATE time_on_activity_duration = VALUES(time_on_activity_duration), score_sum = VALUES(score_sum), score_count =  VALUES(score_count), first_attempt_score = first_attempt_score, average_attempt_score = VALUES(average_attempt_score), highest_attempt_score = VALUES(highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";
    
            //INSERT INTO Aggregate - user_id, product_id, -1, -1
            var query4 = "INSERT INTO Aggregate (user_id, product_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", " + product + ", (SELECT SUM(A.time_on_activity_duration) FROM Aggregate A WHERE A.user_id =" + user + " AND A.product_id = " + product + " AND A.unit_id > 0 AND A.activity_id < 0), (SELECT SUM(B.score_count) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id > 0 AND B.activity_id  < 0), (SELECT SUM(B.score_sum) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id = " + product + " AND B.unit_id > 0 AND B.activity_id  < 0), " + score + ",  (SELECT AVG(C.average_attempt_score) FROM Aggregate C WHERE C.user_id =" + user + " AND C.product_id = " + product + " AND C.unit_id > 0 AND C.activity_id  < 0), (SELECT MAX(D.highest_attempt_score) FROM Aggregate D WHERE D.user_id =" + user + " AND D.product_id = " + product + " AND D.unit_id > 0 AND D.activity_id  < 0), " + score + ")\n ON DUPLICATE KEY UPDATE time_on_activity_duration = VALUES(time_on_activity_duration), score_sum = VALUES(score_sum), score_count =  VALUES(score_count), first_attempt_score = first_attempt_score, average_attempt_score = VALUES(average_attempt_score), highest_attempt_score = VALUES(highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";
    
            //INSERT INTO Aggregate - user_id, -1, -1, -1
            var query5 = "INSERT INTO Aggregate (user_id, time_on_activity_duration, score_count, score_sum, first_attempt_score, average_attempt_score, highest_attempt_score, last_attempt_score) VALUES(" + user + ", (SELECT SUM(A.time_on_activity_duration) FROM Aggregate A WHERE A.user_id =" + user + " AND A.product_id > 0 AND A.unit_id < 0 AND A.activity_id < 0), (SELECT SUM(B.score_count) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id > 0 AND B.unit_id < 0 AND B.activity_id  < 0), (SELECT SUM(B.score_sum) FROM Aggregate B WHERE B.user_id =" + user + " AND B.product_id > 0 AND B.unit_id < 0 AND B.activity_id  < 0), " + score + ",  (SELECT AVG(C.average_attempt_score) FROM Aggregate C WHERE C.user_id =" + user + " AND C.product_id > 0 AND C.unit_id < 0 AND C.activity_id  < 0), (SELECT MAX(D.highest_attempt_score) FROM Aggregate D WHERE D.user_id =" + user + " AND D.product_id > 0 AND D.unit_id < 0 AND D.activity_id  < 0), " + score + ")\n ON DUPLICATE KEY UPDATE time_on_activity_duration = VALUES(time_on_activity_duration), score_sum = VALUES(score_sum), score_count =  VALUES(score_count), first_attempt_score = first_attempt_score, average_attempt_score = VALUES(average_attempt_score), highest_attempt_score = VALUES(highest_attempt_score), last_attempt_score =  VALUES(last_attempt_score);\n\n";
            var query = query2 + query3 + query4 + query5;

            Worker.connection.query(query, function(err, rows) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("snapshot generated");
                }
            });
        });
    }
}