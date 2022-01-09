const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 80;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/static', express.static('public')); 

app.listen(port, () => console.log(`Server up and running on port ${port}.`));

app.get("/", (req, res) => {
  console.log('---');
  res.json({ message: "Welcome to our application." });
});


app.post("/image/get", async (req, res) => {
	const url = "https://www.ringleplus.com";
	res.json(url);
});