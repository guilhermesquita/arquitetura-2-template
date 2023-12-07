import express from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'
import { AccountController } from './controller/AccountController'
import { userRoutes } from './routes/userRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

const accountController = new AccountController()

app.use("/users", userRoutes)

app.get("/accounts", accountController.getAccounts)
app.get("/accounts/:id/balance", accountController.getAccountBalance)
app.post("/accounts", accountController.createAccount)
app.put("/accounts/:id/balance", accountController.editAccountBalance)
