import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import sellers from "./routes/sellerRoutes.mjs";
import buyerRoutes from "./routes/buyerRoutes.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/seller", sellers);
app.use("/buyer", buyerRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});