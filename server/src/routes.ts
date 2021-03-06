import express, { response } from 'express'
import ClassesController from './controllers/ClassesControllers'


const routes = express.Router()
const classesControllers = new ClassesController()


routes.post('/classes',classesControllers.create)
routes.get('/classes',classesControllers.index)



export default routes