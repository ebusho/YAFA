import express from "express";
import homeRouter from "./homepage/router.js";
import transactionRouter from "./transactions/router.js";

const router = express.Router();

router.use('/', homeRouter);
router.use('/transactions', transactionRouter);

export default router;
