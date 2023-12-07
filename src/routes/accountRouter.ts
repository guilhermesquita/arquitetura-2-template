import express from 'express';
import { AccountController } from '../controller/AccountController';

export const accountRoutes = express.Router()
const accountController = new AccountController()

accountRoutes.get('', accountController.getAccounts)
accountRoutes.get('/:id/balance', accountController.getAccountBalance)
accountRoutes.post('', accountController.createAccount)
accountRoutes.put('/:id/balance', accountController.editAccountBalance)