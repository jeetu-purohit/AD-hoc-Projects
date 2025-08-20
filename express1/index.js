import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("response to the request");
// });

// app.get("/insta", (req, res) => {
//   res.send("whose insta do you want to access ?");
// });

// app.get("/twitter", (req, res) => {
//   res.send("whose twitter do you want to access ?");
// });

app.use(express.json());

let teadata = [];
let teaID = 1;

//add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: teaID++, name, price };
  teadata.push(newTea);
  res.status(201).send(newTea);
});
//get all tea
app.get("/teas", (req, res) => {
  res.status(200).send(teadata);
});

//get tea with id
app.get("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    res.status(404).send("tea not found");
  }
  res.status(200).send(tea);
});

//update tea
app.put("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    res.status(404).send("tea not found");
  }

  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(201).send(tea);
});

// /delete
app.delete("/teas/:id", (req, res) => {
  const index = teadata.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Tea not found");
  }

  teadata.splice(index, 1);
  res.status(204).send("Deleted");
});

app.listen(port, () => {
  console.log(`server is running on :- ${port}...`);
});
