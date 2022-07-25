const express = require('express'); 
const userModel = require("./model");
const cors = require('cors');
const app = express(); 
const port = process.env.PORT || 8000;


app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.get('/api', (req, res) => { 
  var data =[{"data" : "Hello world!"}];
  console.log(data)
  res.send("Values Inserted");
});


app.post('/apipost',(req,res) =>
{
  console.log(req.body);
  res.send(req.body);
  res.end();
});

app.post("/add_user",async(request, response) => {
  const user = new userModel(request.body);  
  try {
    await user.save();
    console.log(user);
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    console.log(users);
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
