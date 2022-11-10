Create DATABASE sdc;

USE sdc;

Create TABLE questions (
  id int not null auto_increment,
  product_id int,
  question_body varchar(1000),
  date_written varchar(25),
  asker_name varchar(60),
  asker_email varchar(60),
  reported TINYINT DEFAULT 0,
  helpful int DEFAULT 0,
  primary key (id)
);

CREATE INDEX index_product_id ON questions(product_id);

Create TABLE answers (
  id int not null auto_increment,
  question_id int,
  body varchar(1000),
  date_written varchar(25),
  answerer_name varchar(60),
  answerer_email varchar(60),
  reported TINYINT DEFAULT 0,
  helpful int not null DEFAULT 0,
  primary key (id),
  foreign key (question_id) references questions (id)
);

Create TABLE photos (
  id int not null auto_increment,
  answer_id int,
  url varchar(1000),
  primary key (id),
  foreign key (answer_id) references answers (id)
);

LOAD DATA LOCAL INFILE "/Users/taylorsheets/SDC-QandA/App-data/questions.csv" INTO TABLE questions
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, product_id, question_body, date_written, asker_name, asker_email, reported, helpful);

LOAD DATA LOCAL INFILE "/Users/taylorsheets/SDC-QandA/App-data/answers.csv" INTO TABLE answers
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful);

LOAD DATA LOCAL INFILE "/Users/taylorsheets/SDC-QandA/App-data/answers_photos.csv" INTO TABLE photos
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, answer_id, url);