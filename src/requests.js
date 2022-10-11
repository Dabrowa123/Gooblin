import axios from "axios";

export const fetchTicketsArray = async () => {
  const data = await axios.get(`https://goobl.in/api/tickets`);

  return data;
};

export const sendPutRequest = (data) => {
  axios.put('https://goobl.in/api/ticket', data)
  .catch(err => console.log(err));
};

