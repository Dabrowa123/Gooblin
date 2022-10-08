import axios from "axios";

export const fetchTicketsArray = async () => {
  const data = await axios.get(`https://goobl.in/api/tickets`);

  return data;
};

export const sendPutRequest = (data) => {
  axios.put('https://goobl.in/api/ticket', data)
  .then(res => console.log('Puting data', res)).catch(err => console.log(err));
};