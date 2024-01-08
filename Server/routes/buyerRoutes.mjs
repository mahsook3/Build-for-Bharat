import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all buyers
router.get("/", async (req, res) => {
  let collection = await db.collection("buyers");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// Get a single buyer by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("buyers");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Create a new buyer
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    mobile_number: req.body.mobile_number,
    email: req.body.email,
    password: req.body.password,
    items: req.body.items,
    current_location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    Distict: req.body.district
  };
  let collection = await db.collection("buyers");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(201);
});

// Update a buyer by id
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
  if (req.body.items) {
    updateFields.items = req.body.items;
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
    updateFields.Distict = req.body.district;
  }

  let collection = await db.collection("buyers");
  let result = await collection.updateOne(query, { $set: updateFields });

  res.send(result).status(200);
});


// Delete a buyer
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("buyers");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

// Get nearby sellers based on latitude and longitude
router.get('/nearby/:latitude/:longitude', async (req, res) => {
  const latitude = parseFloat(req.params.latitude);
  const longitude = parseFloat(req.params.longitude);

  let collection = await db.collection('sellers');

  // Define the maximum distance in meters (e.g., 1000 for 1 kilometer)
  const maxDistance = 100000000;

  // Create a GeoJSON point representing the buyer's location
  const buyerLocation = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };

  // Query for nearby sellers within the specified distance
  let results = await collection
    .find({
      location: {
        $near: {
          $geometry: buyerLocation,
          $maxDistance: maxDistance
        }
      }
    })
    .toArray();

  res.send(results).status(200);
});

export default router;
