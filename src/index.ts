// // src/index.ts
// import Database from "./database";

// async function main() {
//   const db = new Database();

//   // Conectar a la base de datos
//   await db.connect();

//   // Realizar una consulta
//   try {
//     const productos = await db.query("SELECT * FROM productos");
//     console.log("Productos:", productos);
//   } catch (error) {
//     console.error("Error en la consulta:", error);
//   }

//   // Cerrar la conexión
//   db.close();
// }

// main();

//-------------------------------------

// import express, { Request, Response } from "express";

// const app = express();
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, World!");
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

//-----------------------------------------
import express, { Request, Response } from "express";
import usuariosRoutes from "./routes/usuario"; // Importar las rutas de usuarios

const app = express();
const port = 3000;

// Middleware para que Express pueda interpretar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta de prueba inicial
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Rutas para usuarios (más tarde puedes añadir rutas para vehículos y reservas)
app.use("/api", usuariosRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
