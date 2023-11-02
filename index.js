import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()); // se deberís diseñar el control de la API con una key/contraseña, etc...

app.get("/api/",(req, res)=>{
    console.log(req.query);
    res.send(`<h1> Hola 1 ${req.query.param2}</h1>`)
}); 

app.get("/api/:id",(req, res)=>{
    console.log(req.params);
    res.send("<h1> Hola 2 </h1>")
}); 

app.post("/api",(req, res)=>{
    console.log(req.body);
    // debería crear algo en la base de datos
    res.status(201).json(req.body.info3);
})

app.post("/api/:nombre",(req, res)=>{
    // crea pidiendo info en la url
    res.status(201).send(`
    <h2> ${req.params.nombre}</h2> `
    );
})

app.put("/api",(req, res)=>{
    // debería crear algo en la base de datos
    res.json({
    mensaje: "put todo OK" 
    });
})


app.delete("/api",(req, res)=>{
    // debería crear algo en la base de datos
    res.json({
    mensaje: "delete todo OK" 
    });
})

// http://localhost:5000/api?param=false&param2=%22otrovalor%22

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Servidor esta activo");
});

app.use((req, res)=>{
    res.send("<h1> ERROR: ruta no existe</h1>")
}); 

