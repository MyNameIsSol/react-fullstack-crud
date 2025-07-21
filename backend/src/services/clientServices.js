import { query } from "../db.js"

export const getClients = async() => {//export so clientController.js can use it
    const {rows} = await query('SELECT * FROM clients_tb');
    return rows;
}

export const createClient = async(clientData) => {//export so clientController.js can use it
    const {name, email, job, rate, isactive } = clientData;
    const {rows} = await query(
        `INSERT INTO clients_tb(name, email, job, rate, isactive) VALUES($1,$2,$3,$4,$5) RETURNING *`,[name, email, job, rate, isactive]
    );
    return rows[0]; //RUTRUN THE FIRST RESULT OF THE RESULT ARRAY(SUCCSS)
}

export const updateClient = async(clientId,clientData) => {//export so clientController.js can use it
    const {name, email, job, rate, isactive } = clientData;
    const {rows} = await query(
        `UPDATE clients_tb SET name = $1, email = $2, job = $3, rate = $4, isactive = $5 WHERE id = $6 RETURNING *`,
        [name, email, job, rate, isactive, clientId] // Note that the arrangement of the placeholder and the values matters
    );
    return rows[0]; //RUTRUN THE FIRST RESULT OF THE RESULT ARRAY(SUCCSS)
}

export const deleteClient = async (clientId) => {
    const {rowCount} = await query(`DELETE FROM clients_tb WHERE id = $1 RETURNING *`, [clientId]);
    return rowCount > 0;
}

export const searchClient = async(searchTerm) => {//export so clientController.js can use it
    const {rows} = await query(
        `SELECT * FROM clients_tb WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1`,
        [`%${searchTerm}%`] // Note that the arrangement of the placeholder and the values matters
    );
    return rows; //RUTRUN THE FIRST RESULT OF THE RESULT ARRAY(SUCCSS)
}