import {Router} from "express"
import { UserController } from "../controllers/UserController"

const router = Router()
const controller = new UserController();


router.get("/",controller.getUser)

export default router;

