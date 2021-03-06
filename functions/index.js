const functions = require("firebase-functions");
const express=require("express");
const cors =require("cors");
const stripe = require("stripe")(
    "pk_test_51JGGDxSE2WpPv2y3MRfWlFMzyci3EmY80l2yhHlU7g71fJjh2Hi9pgFVeQAbrhqge1zxyKyHk8RdMERxrnTGqTEr00pqUYxM7z"
  );


// api

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint

// http://localhost:5001/az-clone-c7850/us-central1/api
