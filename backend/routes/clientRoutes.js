const { ObjectId } = require("mongodb");
const express = require("express");
require("dotenv").config();

const router = express.Router();
const client = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const data = await client.db("events").collection("users").find().toArray();
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { fullname, email, age } = req.body;

    const result = await client.db("events").collection("users").insertOne({
      fullname,
      email,
      age,
    });
    res.status(201).send({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding car:", error);
    return res.status(500).send({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    console.log(id);
    console.log(update);
    const result = await client
      .db("events")
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: update });

    res.send(result);
  } catch (err) {
    res.status(500).send({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await client
      .db("events")
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
