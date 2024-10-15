import { Request, Response } from "express";
import { RowDataPacket } from "mysql2"; // Importamos RowDataPacket para manejar el tipo de retorno de las consultas
import { Usuario } from "../models/usuario"; // Importamos el modelo Usuario
import pool from "../../src/database"; // Cambia la ruta según la estructura de tu proyecto

// Obtener todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
  try {
    // Realizamos la consulta y hacemos el casting de RowDataPacket[] a Usuario[]
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM usuarios");

    // Aquí hacemos un mapeo para que el resultado tenga el tipo correcto
    const usuarios: Usuario[] = rows as Usuario[];

    res.json(usuarios); // Devolvemos los usuarios
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};
