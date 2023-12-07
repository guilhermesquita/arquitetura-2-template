import express from 'express'
import cors from 'cors'
import { userRoutes } from './routes/userRouter'
import { accountRoutes } from './routes/accountRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})


app.use("/users", userRoutes)

app.use("/accounts", accountRoutes)