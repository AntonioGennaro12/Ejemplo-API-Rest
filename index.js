import express from "express"
const app = express();

app.get("/",(req, res)=>{
    console.log("get");
    res.send("<h1> Hola </h1>")
}); 


app.listen(5000, ()=>{
    console.log("Servidor esta activo");
});

app.use((req, res)=>{
    res.send("<h1> ERROR: ruta no existe</h1>")
}); 

