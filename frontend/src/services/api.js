import axios from "axios";

// Retire o comentario para utilizar da forma em que deseja 
// em ambiente de desenvolvimento

// Cliente para acesso em localhost
// const api = axios.create({
//     baseURL: "http://"+ process.env.LOCAL_SERVER_ACCESS_ROUTING + ":8000/api",
// });


// Client para rotear acesso server local
// OBS: Adicionar ip_address ipv4 no .env.development
const api = axios.create({
    baseURL: "http://"+ process.env.LOCAL_SERVER_ACCESS_ROUTING + ":8000/api",
});

export default api;

