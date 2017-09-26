DROP TABLE IF EXISTS `Aggregate`;
DROP TABLE IF EXISTS `Record`;
DROP TABLE IF EXISTS `Product`;
DROP TABLE IF EXISTS `Unit`;
DROP TABLE IF EXISTS `Activity`;
DROP TABLE IF EXISTS `User`;

CREATE TABLE Product(
	id INT AUTO_INCREMENT PRIMARY KEY,
	product_id INT NOT NULL UNIQUE
);

CREATE TABLE Unit(
	id INT AUTO_INCREMENT PRIMARY KEY,
	unit_id INT NOT NULL UNIQUE
);

CREATE TABLE Activity(
	id INT AUTO_INCREMENT PRIMARY KEY,
	activity_id INT NOT NULL UNIQUE
);

CREATE TABLE User(
	id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT NOT NULL UNIQUE
);

DROP TABLE IF EXISTS `Record`;
CREATE TABLE Record(
	record_id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	product_id INT NOT NULL,
	unit_id INT NOT NULL,
	activity_id INT NOT NULL,
	attempt_run INT NOT NULL,
	time_on_activity_duration INT NOT NULL,
	score INT NOT NULL,
	PRIMARY KEY (record_id),
	UNIQUE KEY (user_id, product_id, unit_id, activity_id, attempt_run),
	FOREIGN KEY (product_id) REFERENCES Product(product_id),
	FOREIGN KEY (unit_id) REFERENCES Unit(unit_id),
	FOREIGN KEY (activity_id) REFERENCES Activity(activity_id),
	FOREIGN KEY (user_id) REFERENCES User(user_id)
);

DROP TABLE IF EXISTS `Aggregate`;
CREATE TABLE Aggregate(
	user_id INT NOT NULL,
	product_id INT default -1,
	unit_id INT default -1,
	activity_id INT default -1,
	time_on_activity_duration INT NOT NULL,
	score_count INT NOT NULL,
	score_sum INT NOT NULL,
	first_attempt_score INT NOT NULL,
	average_attempt_score INT NOT NULL,
	highest_attempt_score INT NOT NULL,
	last_attempt_score INT NOT NULL,
	PRIMARY KEY (user_id, product_id, unit_id, activity_id)
);

INSERT INTO Product (product_id) VALUES ('1');
INSERT INTO Product (product_id) VALUES ('2');
INSERT INTO Product (product_id) VALUES ('3');
INSERT INTO Product (product_id) VALUES ('4');
INSERT INTO Product (product_id) VALUES ('5');
INSERT INTO Product (product_id) VALUES ('6');
INSERT INTO Product (product_id) VALUES ('7');
INSERT INTO Product (product_id) VALUES ('8');
INSERT INTO Product (product_id) VALUES ('9');
INSERT INTO Product (product_id) VALUES ('10');

INSERT INTO Unit (unit_id) VALUES ('1');
INSERT INTO Unit (unit_id) VALUES ('2');
INSERT INTO Unit (unit_id) VALUES ('3');
INSERT INTO Unit (unit_id) VALUES ('4');
INSERT INTO Unit (unit_id) VALUES ('5');

INSERT INTO Activity (activity_id) VALUES ('1');
INSERT INTO Activity (activity_id) VALUES ('2');
INSERT INTO Activity (activity_id) VALUES ('3');
INSERT INTO Activity (activity_id) VALUES ('4');
INSERT INTO Activity (activity_id) VALUES ('5');

INSERT INTO User (user_id) VALUES ('1');
INSERT INTO User (user_id) VALUES ('2');
INSERT INTO User (user_id) VALUES ('3');
INSERT INTO User (user_id) VALUES ('4');
INSERT INTO User (user_id) VALUES ('5');

