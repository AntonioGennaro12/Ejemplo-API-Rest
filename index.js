import express from "express"
const app = express();

app.listen(5000, ()=>{
    console.log("Servidor esta activo");
});

app.use((req, res)=>{
    res.send("<h1> ERROR: ruta no existe</h>")
});

