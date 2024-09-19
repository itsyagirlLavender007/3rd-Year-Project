import express from "express"
// import { User } from "../models/user.js";
import { getAllUser, idFunc, register } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUser)

router.post("/new",register)

router.get("/id/:id",idFunc)

export default router;