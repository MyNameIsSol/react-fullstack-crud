import * as clientService from "../services/clientServices.js"

export const getClients = async (req, res) => { //export so clientRouter.js can use it
    try{
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    }catch(err){
        console.error('Error fetching clients:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const createClient = async (req, res) => { //export so clientRouter.js can use it
    try{
        const clientData = req.body; //req.body is everything inputted in the form, ie name, email, job
        const newClient = await clientService.createClient(clientData);
        res.status(200).json(newClient);
    }catch(err){
        console.error('Error creating clients:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const updateClient = async (req, res) => { //export so clientRouter.js can use it
    try{
        const clientData = req.body; //req.body is everything inputted in the form, ie name, email, job
        const clientId = req.params.id; //req.params.id is gotten from the url
        const updatedClient = await clientService.updateClient(clientId,clientData);
        if(!updatedClient){
            res.status(404).json({message: 'Client Not Found'});
        }
        res.status(200).json(updateClient);
    }catch(err){
        console.error('Error updating clients:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const searchClient = async (req, res) => { //export so clientRouter.js can use it
    try{
        const searchTerm = req.query.q; //req.params.q is gotten from the url
        const clients = await clientService.searchClient(searchTerm);
        res.status(200).json(clients);
    }catch(err){
        console.error('Error searching clients..', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const deleteClient = async (req, res) => { //export so clientRouter.js can use it
    try{
        const clientId = req.params.id; //req.params.id is gotten from the url
        const deletedClient = await clientService.deleteClient(clientId);
        if(!deletedClient){
            res.status(404).json({message: 'Client Not Found'});
        }
        res.status(200).send();
    }catch(err){
        console.error('Error on deleting clients:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}