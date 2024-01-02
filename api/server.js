import express from 'express';

const app = express();
const port = 4000;  // Make sure this port is different from your React app's port

app.get('/', (req, res) => {
    console.log("hello");
  res.json({ message: "Hello from server!" });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
