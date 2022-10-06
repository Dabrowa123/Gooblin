import axios from "axios";

export const getTicketData = async () => {
  const data = await axios.get(`https://goobl.in/api/tickets`);

  return data;
};
