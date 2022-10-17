export const fetchTicketsArray = async () => {
  const resp = await fetch(`https://goobl.in/api/tickets`);
  return await resp.json();
};

export const getTickedDetails = async (id) => {
  const resp = await fetch(`https://goobl.in/api/ticket/${id}`);
  return await resp.json();
}

export const sendPutRequest = (data) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  
  fetch('https://goobl.in/api/ticket', requestOptions);
};

export const deleteRequest = (id) => {
  console.log(id);
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  fetch(`https://goobl.in/api/ticket/${id}`, requestOptions).then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));
};