import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("sellers");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("sellers");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    mobile_number: req.body.mobile_number,
    email: req.body.email,
    password: req.body.password,
    stall_type: req.body.stall_type,
    recipes: req.body.recipes,
    current_location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    Distict: req.body.district,
    image:req.body.image,
    upi_id:req.body.upi_id,
    prices: req.body.price
  };
  let collection = await db.collection("sellers");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updateFields = {};

  if (req.body.name) {
    updateFields.name = req.body.name;
  }
  if (req.body.mobile_number) {
    updateFields.mobile_number = req.body.mobile_number;
  }
  if (req.body.email) {
    updateFields.email = req.body.email;
  }
  if (req.body.password) {
    updateFields.password = req.body.password;
  }
  if (req.body.stall_type) {
    updateFields.stall_type = req.body.stall_type;
  }
  if (req.body.recipes) {
    updateFields.recipes = req.body.recipes;
  }
  if (req.body.current_location) {
    updateFields.current_location = req.body.current_location;
  }
  if (req.body.latitude) {
    updateFields.latitude = req.body.latitude;
  }
  if (req.body.longitude) {
    updateFields.longitude = req.body.longitude;
  }
  if (req.body.district) {
    updateFields.district = req.body.district;
  }
  if (req.body.prices) {
    updateFields.prices = req.body.prices;
  }

  let collection = await db.collection("sellers");
  let result = await collection.updateOne(query, { $set: updateFields });

  res.send(result).status(200);
});


// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("sellers");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

// Update menu item price by ID
router.patch("/menu/:menuItemId", async (req, res) => {
  try {
    const menuItemId = req.params.menuItemId;
    const newPrice = req.body.newPrice; // The new price to set

    // Update the price of the menu item in your database
    // You'll need to implement the logic to update the database here

    res.status(200).json({ message: "Menu item price updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.post("/:id/reviews", async (req, res) => {
  try {
    const sellerId = req.params.id;
    const reviewData = {
      reviewer_name: req.body.reviewer_name,
      review_text: req.body.review_text,
      rating: req.body.rating,
      date: new Date()
    };

    const collection = await db.collection("sellers");
    const result = await collection.updateOne(
      { _id: new ObjectId(sellerId) },
      { $push: { reviews: reviewData } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
