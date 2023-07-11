import { Router } from "express"
import { createTransaction, getTransactions } from "../controllers/transaction.controller.js"
import { schemaValidation } from "../middlewares/schemaValidation.js"
import { transactionSchema } from "../schemas/transaction.schemas.js"
import { authValidation } from "../middlewares/authValidation.js"

const transactionRouter = Router()

transactionRouter.post("/transactions", authValidation, schemaValidation(transactionSchema), createTransaction)
transactionRouter.get("/transactions", authValidation, getTransactions)

export default transactionRouter