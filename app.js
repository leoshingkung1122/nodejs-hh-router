import express from "express";
import bodyParser from "body-parser";
import { assignments as assignmentsFromFile } from "./data/assignments.js";
import { comments as commentsFromFile } from "./data/comments.js";
import AssignmentRouter from "./routes/assignments.mjs";
import AccountRouter from "./routes/accounts.mjs";

let assignments = [...assignmentsFromFile];
let comments = [...commentsFromFile];

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.use("/assignments", AssignmentRouter);
app.use("/accounts", AccountRouter);



app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
