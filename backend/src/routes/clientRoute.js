import express from 'express';

import * as clientController from '../controllers/clientController.js'; //import all in clienController

const router = express.Router();

router.get('/clients', clientController.getClients);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);
router.get('/clients/search', clientController.searchClient)


export default router; //export so index.js can use it