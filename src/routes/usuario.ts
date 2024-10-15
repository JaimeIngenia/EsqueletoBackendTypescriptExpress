import { Router } from "express";
import { getUsuarios } from "../controllers/usuariosController";

const router = Router();

// Definir la ruta que obtiene todos los usuarios
router.get("/usuarios", getUsuarios);

export default router;
