let express = require("express");
const app = express();
app.listen(4000,()=>{
    console.log("server started");
})

app.get("/",(req,res)=>{
    res.send("hello recieved");
});
app.post("/hello",(req,res)=>{
    res.send("This is Post request");
});

app.put("/hello",(req,res)=>{
    res.send("This is put request");
});
app.delete("/hello",(req,res)=>{
    res.send("This delete request");
});
