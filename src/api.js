import axios from 'axios';

const API_URL = 'http://localhost:3001/projets';

export const getProjets = () => axios.get(API_URL);
export const getProjet = (id) => axios.get(`${API_URL}/${id}`);
export const addProjet = (projet) => axios.post(API_URL, projet);
export const updateProjet = (id, projet) => axios.put(`${API_URL}/${id}`, projet);
export const deleteProjet = (id) => axios.delete(`${API_URL}/${id}`);