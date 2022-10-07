import axios from "axios";

export const fetchTicketsArray = async () => {
  const data = await axios.get(`https://goobl.in/api/tickets`);

  return data;
};

// export const createTicket = async (data) => {
  // const data = await axios.put(`https://goobl.in/api/ticket`);

  // return data;
// };