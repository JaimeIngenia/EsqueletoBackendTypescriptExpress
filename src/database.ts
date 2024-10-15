import { createPool, Pool } from "mysql2/promise";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear el pool de conexiones a MySQL
const pool: Pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306,
  connectionLimit: 10, // Máximo de conexiones simultáneas
});

export default pool;

// // src/database.ts
// import mysql from "mysql2/promise";

// class Database {
//   private connection: mysql.Connection;

//   constructor() {
//     this.connection = {} as mysql.Connection;
//   }

//   async connect() {
//     try {
//       this.connection = await mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "your_password",
//         database: "your_database",
//       });

//       console.log("Conectado a MySQL correctamente");
//     } catch (error) {
//       console.error("Error conectando a la base de datos:", error);
//     }
//   }

//   async query(sql: string, params?: any[]): Promise<any> {
//     try {
//       const [results] = await this.connection.execute(sql, params);
//       return results;
//     } catch (error) {
//       console.error("Error ejecutando consulta:", error);
//       throw error;
//     }
//   }

//   close() {
//     this.connection.end();
//   }
// }

// export default Database;
