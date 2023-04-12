const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/locations", (req, res) => {
  let builder = {
    locations: []
  }
  const data = fs.readFileSync("./resources/locations.txt", 'utf8');
  console.log(data);

})