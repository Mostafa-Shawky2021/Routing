import axios from 'axios';  

export const fetchAlluser = async ()=> await axios.get('https://jsonplaceholder.typicode.com/users');
export const fetchUser = async ( id )=> await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);



