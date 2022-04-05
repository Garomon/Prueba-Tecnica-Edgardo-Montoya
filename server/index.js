import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

//Inicializamos la app para crear servidor 
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Importamos las rutas e inidicamos la ruta con la que comenzara
app.use("/posts", postRoutes);
app.use("/user", userRouter);

app.get('/', (req, res) => {
  res.send('LA APP ESTA CORRIENDO :D')
})


//Utilizamos Mongoose para conectarnos a la base de datos en MongoDB
const CONNECTION_URL =
  "mongodb+srv://garomon:f9vf7r5x@cluster0.bupxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;


mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //regresa una promesa
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT} | READY :)`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
