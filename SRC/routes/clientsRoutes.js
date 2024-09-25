import { Router } from "express";
import { GetClients, GetClientsById ,createClients,updateClients,deletedClients} from "../controllers/clientControllers.js";

const router = Router();

router.get('/clients',GetClients)
router.get('/clients/:id',GetClientsById)
router.post('/clients',createClients)
router.put('/clients/:id',updateClients)
router.delete('/clients/:id',deletedClients)


export default router;