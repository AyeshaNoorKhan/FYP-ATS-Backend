const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectdb.js");
const bodyParser = require("body-parser");

const jobRoutes = require("./routes/jobRoutes.js");
const aptitudeRoutes = require("./routes/aptitudeRoutes.js");
const candInfoRoutes = require("./routes/candinfoRoutes.js");
const candResRoutes = require("./routes/finalshortcandRoutes");
const candTestResultRoutes = require("./routes/candtestresultRoutes");
const shortlistedResume = require("./routes/shortlistedresumeRoutes");
const finalShortlistedCandRoutes = require("./routes/finalshortcandRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 3500;
const DATABASE_URL = process.env.DATABASE_URL;

//BODY PARSER
app.use(bodyParser.json());

//CORS POLICY
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Credentials", true);
  // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

//DATABASE CONNECTION
connectDb(DATABASE_URL);

//JSON
app.use(express.json());

//LOAD ROUTES

// JOB Routes
app.use("/api/job", jobRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/job", jobRoutes);

// Aptitude Test Routes
app.use("/api/aptTest", aptitudeRoutes);
app.use("/api/aptTest", aptitudeRoutes);

// Candidate Information
app.use("/api/candinfo", candInfoRoutes);
app.use("/api/candinfo", candInfoRoutes);
app.use("/api/candinfo", candInfoRoutes);
app.use("/api/candinfo", candInfoRoutes);

// Candidate Resume
//app.use("/api/candinfo",candInfoRoutes);
app.use("/api/candresm", candResRoutes);
app.use("/api/candresm", candResRoutes);

// Candidate Test Result
app.use("/api/testresult", candTestResultRoutes);
app.use("/api/testresult", candTestResultRoutes);
app.use("/api/testresult", candTestResultRoutes);

// Final Shortlisted Resumes
app.use("/api/shortlistresume", shortlistedResume);
app.use("/api/shortlistresume", shortlistedResume);

// Final Shortlisted Candidates
app.use("/api/shortlistcandidate", finalShortlistedCandRoutes);
app.use("/api/shortlistcandidate", finalShortlistedCandRoutes);

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
