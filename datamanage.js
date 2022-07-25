const express = require("express");
const userModel = require("./model");
const app = express();
app.use(express.json());


app.post("/add_user",async(request, response) => {
    const user = new userModel(request.body);  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.get('/',(req,res)=>{
    res.send("Hello world");
    res.end();
})

app.listen(8001);
console.log('PORT enable on http://localhost:8001');
// module.exports = app;