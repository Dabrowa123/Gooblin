import axios from "axios";

export const fetchTicketsArray = async () => {
  const data = await axios.get(`https://goobl.in/api/tickets`);

  return data;
};
