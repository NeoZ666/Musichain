const express = require("express");
const app = express();

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Nk7IzSEBFON0EJBR49AsAhYc5E9LEGJOwpwDgno7co8msn4NiODrrHQEthWPQfqi07nwBDTE5D30hDq68zluzrJ0046eRH5rQ"
);

app.use(express.json());
app.use(cors());

// checkout API part
app.post("/api/create-checkout-session", async (req, res) => {
  const { plans } = req.body;
  console.log(plans);

  const lineItems = plans.map((plans) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: plans.name,
      },
      unit_amount: plans.price * 100,
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // line_items: [
    //   {
    //     price_data: {
    //       currency: "inr",
    //       product_data: {
    //         name: plans.name,
    //       },
    //       unit_amount: plans.price * 100,
    //     },
    //     quantity: 1,
    //   },
    // ],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("Server started on port 7000");
});
