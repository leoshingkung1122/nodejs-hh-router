import { Router } from "express";

const AccountRouter = Router();

AccountRouter.get("/", function (req, res) {
    res.send("View all accounts");
  });
  
  AccountRouter.get("/:id", function (req, res) {
    res.send("View an account by id");
  });
  
  AccountRouter.post("/", function (req, res) {
    res.send("Create an account");
  });
  
  AccountRouter.put("/:id", function (req, res) {
    res.send("Update an account by id");
  });
  
  AccountRouter.delete("/:id", function (req, res) {
    res.send("Delete an account by id");
  });

export default AccountRouter;