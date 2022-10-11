export const fetchTicketsArray = async () => {
  const resp = await fetch(`https://goobl.in/api/tickets`);
  return await resp.json();
};

export const sendPutRequest = (data) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  
  fetch('https://goobl.in/api/ticket', requestOptions);
};

