import express from "express";
import homeRouter from "./homepage/router.js";

const router = express.Router();

router.use('/', homeRouter);

export default router;
