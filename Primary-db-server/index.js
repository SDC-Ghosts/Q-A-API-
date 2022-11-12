require("dotenv").config();
const express=require("express");
const path = require("path");
const db = require("./db.js");
const models = require("./models.js");
const morgan = require("morgan");

const app = express();

app.use(express.json());

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);


app.get('/loaderio-36c4877f13696ea7284fb9e27fd288b2.html', (req, res) => {
  res.send('loaderio-36c4877f13696ea7284fb9e27fd288b2');
})
// ROUTER FUNCTIONS
//GET
app.get('/qa/questions', morgan('tiny'), (req, res) => {
  models.getQuestions(req.query, res);
})

app.get('/qa/questions/*/answers', morgan('tiny'), (req, res) => {
  models.getAnswers(req.query, req.url, res);

})

//POST
app.post('/qa/questions', morgan('tiny'), (req, res) => {
  models.postQuestions(req.body, res);
})

app.post('/qa/questions/*/answers', morgan('tiny'), (req, res) => {
  console.log(req.body);
  models.postAnswers(req.body, req.url, res);
})

//PUT - HELPFUL
app.put('/qa/questions/*/helpful', morgan('tiny'), (req, res) => {
  models.helpfulQuestions(req.url, res);
})

app.put('/qa/answers/*/helpful', morgan('tiny'), (req, res) => {
  models.helpfulAnswers(req.url, res);
})

//PUT - REPORT
app.put('/qa/questions/*/report', morgan('tiny'), (req, res) => {
  models.reportQuestions(req.url, res);
})

app.put('/qa/answers/*/report', morgan('tiny'), (req, res) => {
  models.reportAnswers(req.url, res);
})